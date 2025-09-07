import PopUpModal from './PopUpModal';
import Button from './button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { onConfirm ,resetResponse } from '@/store/user/slices/ConfirmNotification';



function ConfirmationNotification() {

  const dispatch = useDispatch()
  // const [close,setClose] = useState(true)
  const {title,message} = useSelector(state=>state.confirmNotification)
  const onCancelNotification=e=>{
    dispatch(resetResponse()) 
    
  }
  const onConfirmNotification=e=>{
    
     dispatch(onConfirm())
    

  }
  const onCloseHandler =()=>{
    
    dispatch(resetResponse()) 
  }

  const isopen = title|| message
  return (
    <PopUpModal isOpen={isopen} onClose={onCloseHandler} >
      <div className="p-6 text-center space-y-4 max-w-sm">
        <h2 className="text-xl font-semibold text-[#1B4332]">{title}</h2>
        <p className="text-sm text-gray-600">{message}</p>
        <div className="flex justify-center gap-4 pt-4">
          <Button
            onClick={onCancelNotification}
            className="bg-gray-200 text-[#1B4332] hover:bg-gray-300 rounded-full px-5 py-2 text-sm"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirmNotification}
            className="bg-[#1B4332] text-white hover:bg-[#163828] rounded-full px-5 py-2 text-sm"
          >
            OK
          </Button>
        </div>
      </div>
    </PopUpModal>
  );
}

export default ConfirmationNotification;
