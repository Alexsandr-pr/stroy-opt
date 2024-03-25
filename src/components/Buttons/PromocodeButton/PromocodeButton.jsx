import IconCopyCode from "components/Icon/IconCopyCode"
import { CopyToClipboard } from "react-copy-to-clipboard"

const PromocodeButton = ({code}) => {



    return (
        <CopyToClipboard text={code}>
            <button  className="flex text-blue py-2.5 px-4 text-sm items-center border gap-2.5 rounded-lg border-dashed border-[#BDCDE0]">
                {code}
                <IconCopyCode/>
            </button>
        </CopyToClipboard>
        
    )
}

export default PromocodeButton