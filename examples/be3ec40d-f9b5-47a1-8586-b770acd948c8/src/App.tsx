import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X, Download, Copy, AlertCircle } from 'lucide-react';

interface ImageDetails {
  file: File;
  url: string;
  width: number;
  height: number;
  size: string;
  type: string;
  aspectRatio: string;
  lastModified: string;
}

function App() {
  const [imageDetails, setImageDetails] = useState<ImageDetails | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const calculateAspectRatio = (width: number, height: number): string => {
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(width, height);
    return `${width / divisor}:${height / divisor}`;
  };

  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const validateImage = (file: File): boolean => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    
    if (!allowedTypes.includes(file.type)) {
      setError('只支持 JPG、PNG、GIF 和 WebP 格式的图片');
      return false;
    }
    
    if (file.size > maxSize) {
      setError('图片大小不能超过 10MB');
      return false;
    }
    
    return true;
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    setError(null);
    if (!validateImage(file)) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setImageDetails({
          file,
          url: e.target?.result as string,
          width: img.width,
          height: img.height,
          size: formatFileSize(file.size),
          type: file.type,
          aspectRatio: calculateAspectRatio(img.width, img.height),
          lastModified: formatDate(file.lastModified)
        });
      };
      img.onerror = () => {
        setError('图片加载失败，请重试');
      };
      img.src = e.target?.result as string;
    };
    reader.onerror = () => {
      setError('读取文件失败，请重试');
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    setError(null);
    
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const input = fileInputRef.current;
      if (input) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        input.files = dataTransfer.files;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    } else {
      setError('请上传有效的图片文件');
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const clearImage = () => {
    setImageDetails(null);
    setError(null);
    setCopySuccess(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const downloadImage = () => {
    if (!imageDetails) return;
    
    const link = document.createElement('a');
    link.href = imageDetails.url;
    link.download = imageDetails.file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyImage = async () => {
    if (!imageDetails) return;
    
    try {
      const response = await fetch(imageDetails.url);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [imageDetails.type]: blob
        })
      ]);
      setCopySuccess('图片已复制到剪贴板');
      setTimeout(() => setCopySuccess(null), 2000);
    } catch (err) {
      setError('复制图片失败，请重试');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            图片信息查看器
          </h1>
          <p className="text-gray-600">快速获取图片尺寸、大小等详细信息</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div
            className={`p-8 transition-all duration-300 ${
              isDragging
                ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-400'
                : 'border-2 border-dashed border-gray-200'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/jpeg,image/png,image/gif,image/webp"
              className="hidden"
              id="imageInput"
            />
            
            {!imageDetails ? (
              <label
                htmlFor="imageInput"
                className="block cursor-pointer group"
              >
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-20 h-20 mb-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Upload className={`w-10 h-10 ${isDragging ? 'text-blue-500' : 'text-blue-400 group-hover:text-blue-500'}`} />
                  </div>
                  <p className={`text-lg ${isDragging ? 'text-blue-600' : 'text-gray-600'}`}>
                    点击上传或拖拽图片到此处
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    支持 JPG、PNG、GIF 和 WebP 格式，最大 10MB
                  </p>
                </div>
              </label>
            ) : (
              <div className="relative">
                <button
                  onClick={clearImage}
                  className="absolute -top-4 -right-4 p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                  title="清除图片"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0 w-full lg:w-80 h-80">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-2">
                      <img
                        src={imageDetails.url}
                        alt="Uploaded preview"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <ImageIcon className="w-5 h-5 text-blue-500" />
                        图片属性
                      </h3>
                      <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <dt className="text-sm font-medium text-gray-500 mb-1">文件名</dt>
                          <dd className="text-gray-800 font-medium truncate">{imageDetails.file.name}</dd>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <dt className="text-sm font-medium text-gray-500 mb-1">尺寸</dt>
                          <dd className="text-gray-800 font-medium">{imageDetails.width} × {imageDetails.height} 像素</dd>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <dt className="text-sm font-medium text-gray-500 mb-1">宽高比</dt>
                          <dd className="text-gray-800 font-medium">{imageDetails.aspectRatio}</dd>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <dt className="text-sm font-medium text-gray-500 mb-1">文件大小</dt>
                          <dd className="text-gray-800 font-medium">{imageDetails.size}</dd>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <dt className="text-sm font-medium text-gray-500 mb-1">文件类型</dt>
                          <dd className="text-gray-800 font-medium">{imageDetails.type}</dd>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <dt className="text-sm font-medium text-gray-500 mb-1">修改时间</dt>
                          <dd className="text-gray-800 font-medium">{imageDetails.lastModified}</dd>
                        </div>
                      </dl>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={downloadImage}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        <Download className="w-5 h-5" />
                        下载图片
                      </button>
                      <button
                        onClick={copyImage}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        <Copy className="w-5 h-5" />
                        复制图片
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {(error || copySuccess) && (
          <div className={`mt-6 p-4 rounded-xl shadow-lg ${
            error ? 'bg-red-50 border border-red-100' : 'bg-green-50 border border-green-100'
          }`}>
            <p className={`flex items-center gap-2 ${
              error ? 'text-red-800' : 'text-green-800'
            }`}>
              {error ? <AlertCircle className="w-5 h-5" /> : null}
              {error || copySuccess}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;