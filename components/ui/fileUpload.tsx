import React, { useState, useRef, useCallback, ChangeEvent, DragEvent } from 'react';

interface FileProgressMap {
  [key: string]: number;
}
type setFileType = {
  setFile: (newFiles: File[] | any)=> void,
  files: File[]
}

const FileUpload = ({setFile, files}: setFileType) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<FileProgressMap>({});
  const [uploadStatus, setUploadStatus] = useState<string>('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Handle drag events
  const handleDragEnter = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  
  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  }, [isDragging]);
  
  // Handle dropped files
  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length) {
      processFiles(droppedFiles);
    }
  }, []);
  
  // Handle manually selected files
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const selectedFiles = Array.from(e.target.files);
      processFiles(selectedFiles);
    }
  };
  
  // Process and validate files
  const processFiles = (newFiles: File[]) => {
    // Here you can add validation for file types, sizes, etc.
    // For example, to allow only images:
    const validFiles = newFiles.filter(file => file.type.startsWith('image/'));
    
    if (validFiles.length !== newFiles.length) {
      setUploadStatus('Some files were rejected. Only images are allowed.');
    }
    
    setFile((prevFiles: File[]) => [...prevFiles, ...validFiles]);
    
    // Set up initial progress for each file
    const newProgress: FileProgressMap = {};
    validFiles.forEach(file => {
      newProgress[file.name] = 0;
    });
    setUploadProgress(prev => ({ ...prev, ...newProgress }));
    
    // Simulate upload for demonstration
    simulateUpload(validFiles);
  };
  
  // Simulate file upload with progress
  const simulateUpload = (filesToUpload: File[]) => {
    setUploadStatus('Uploading...');
    
    filesToUpload.forEach(file => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        
        setUploadProgress(prev => ({
          ...prev,
          [file.name]: Math.round(progress)
        }));
        
        // Check if all files have completed
        if (progress === 100) {
          clearInterval(interval);
          const allUploaded = Object.values(uploadProgress).every(p => p === 100);
          if (allUploaded) {
            setUploadStatus('All files uploaded successfully!');
          }
        }
      }, 300);
    });
  };
  
  // Remove a file from the list
  const removeFile = (fileName: string) => {
    setFile((prevFiles: File[]) => prevFiles.filter(file => file.name !== fileName));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
  };
  
  // Clear all files
  const clearFiles = () => {
    setFile([]);
    setUploadProgress({});
    setUploadStatus('');
  };
  
  // Trigger file input click
  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto">
      <div 
        className={`relative w-full h-64 border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileSelect}
          multiple
        />
        
        <svg 
          className={`w-12 h-12 mb-3 ${isDragging ? 'text-blue-500' : 'text-gray-400'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        
        <p className="mb-2 text-sm text-gray-500">
          <span className="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500">
          Image files only (PNG, JPG, GIF)
        </p>
      </div>
      
      {/* File list */}
      {files.length > 0 && (
        <div className="w-full mt-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-medium">Files ({files.length})</h3>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                clearFiles();
              }}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Clear all
            </button>
          </div>
          
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  {/* Progress bar */}
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${uploadProgress[file.name] || 0}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-9">
                    {uploadProgress[file.name] || 0}%
                  </span>
                  
                  {/* Remove button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(file.name);
                    }} 
                    className="ml-2 text-gray-400 hover:text-red-500"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          
          {uploadStatus && (
            <div className={`mt-3 text-sm ${uploadStatus.includes('rejected') ? 'text-red-500' : 'text-green-500'}`}>
              {uploadStatus}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;