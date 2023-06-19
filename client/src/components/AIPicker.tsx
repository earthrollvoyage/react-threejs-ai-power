import React, { Dispatch, SetStateAction } from 'react'

import CustomButton from './CustomButton';

type Props = {
  prompt: string;
  setPrompt: Dispatch<SetStateAction<string>>;
  generatingImg: boolean;
  handleSubmit: (type: any) => Promise<void>;
}

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }: Props) => {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e: any) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />

            <CustomButton 
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker