import React, { useRef } from 'react'
import { Image, Upload } from 'lucide-react'

const FileUpload = ({ label = 'Upload files', accept = 'image/*', multiple = false, onChange, value = [] }) => {
  const inputRef = useRef(null)

  const handleChoose = () => inputRef.current?.click()

  const handleChange = (e) => {
    const files = Array.from(e.target.files || [])
    onChange?.(files)
  }

  return (
    <div className="bg-white rounded-xl p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F0F7FF' }}>
            <Image size={20} color="#0A84FF" />
          </div>
          <div className="font-medium text-gray-800">{label}</div>
        </div>
        <button onClick={handleChoose} className="px-3 py-1.5 rounded-xl text-white text-sm font-semibold" style={{ backgroundColor: '#0A84FF' }}>
          <span className="inline-flex items-center gap-1"><Upload size={16} className="text-white" />Choose</span>
        </button>
      </div>
      <input ref={inputRef} type="file" accept={accept} multiple={multiple} className="hidden" onChange={handleChange} />
      {value && value.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {value.map((file, idx) => (
            <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              {typeof file === 'string' ? (
                <img src={file} alt="preview" className="w-full h-full object-cover" />
              ) : (
                <img src={URL.createObjectURL(file)} alt="preview" className="w-full h-full object-cover" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FileUpload
