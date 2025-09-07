'use client';

import { useDropzone } from 'react-dropzone';
import { useState, useEffect } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  rectSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { showNotification } from '@/store/user/slices/Notification';

function SortableImage({ file, id, onRemove }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleClick = (e) => {
    e.stopPropagation();
    onRemove();
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative w-24 h-24 rounded-md overflow-hidden border border-gray-300"
    >
      <div {...attributes} {...listeners} className="absolute inset-0 cursor-move z-0">
        <Image
          src={ file instanceof File ? URL.createObjectURL(file) : file // fallback for string URLs
}
          alt="preview"
          fill
          className="object-cover"
        />
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="absolute -top-2 -right-2 bg-white rounded-full shadow p-1 text-xs z-10"
      >
        <X size={14} />
      </button>
    </div>
  );
}

export default function ImageUploadManager({ images, setImages, onSave }) {
  const [idList, setIdList] = useState(images.map((_, i) => i.toString()));
  const dispatch = useDispatch();

  // const imagesAlreadyExists = JSON.parse(localStorage.getItem('images'))

  useEffect(() => {
   
    setIdList(images.map((_, i) => i.toString()));
  }, [images,localStorage.getItem('images')]);

  const onDrop = (acceptedFiles) => {
    const maxSize = 1 * 1024 * 1024; // 500KB

    const validFiles = [];
    for (const file of acceptedFiles) {
      if (!['image/jpeg', 'image/jpg'].includes(file.type)) {
        dispatch(showNotification({ message: 'Only JPEG images are allowed.', type: 'error' }));
        continue;
      }

      if (file.size < maxSize) {
        dispatch(showNotification({ message: 'Image size must be under 500KB.', type: 'error' }));
        continue;
      }

      validFiles.push(file);
    }

    const newFiles = validFiles.slice(0, 3 - images.length);
    const updatedImages = [...images, ...newFiles];

    setImages(updatedImages);
    setIdList(updatedImages.map((_, i) => i.toString()));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    onDrop,
    multiple: true,
    maxFiles: 3,
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = idList.indexOf(active.id);
      const newIndex = idList.indexOf(over.id);
      const newIdList = arrayMove(idList, oldIndex, newIndex);
      const newFiles = arrayMove(images, oldIndex, newIndex);
      setIdList(newIdList);
      setImages(newFiles);
    }
  };

  const handleRemove = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
    setIdList(updated.map((_, i) => i.toString()));
  };

  const handleSave = () => {
    if (onSave) onSave(images); // Pass images to parent
  };

  return (
    <div>
      {/* Upload Box */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer text-sm text-gray-500 ${
          isDragActive ? 'border-green-600 bg-green-50' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        {images.length < 3
          ? 'Drag & drop or click to upload (max 3 images)'
          : 'Maximum 3 images reached'}
      </div>

      {/* Image Previews */}
      {images.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">
            Drag to reorder (first image is primary)
          </p>
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={idList} strategy={rectSortingStrategy}>
              <div className="flex gap-3 flex-wrap">
                {images.map((file, index) => (
                  <SortableImage
                    key={idList[index]}
                    id={idList[index]}
                    file={file}
                    onRemove={() => handleRemove(index)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      )}

      {/* Save Button */}
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={handleSave}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-sm"
        >
          Save
        </button>
      </div>
    </div>
  );
}
