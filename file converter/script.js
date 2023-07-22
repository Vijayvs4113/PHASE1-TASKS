window.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.querySelector('.image-upload');
    const imagePreview = document.querySelector('.image-preview');
    const conversionMessage = document.querySelector('.conversion-message');
    const downloadButton = document.querySelector('.download-button');
    const filenameInput = document.querySelector('.filename-input');

    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;

            img.onload = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;

                context.drawImage(img, 0, 0, img.width, img.height);

                const dataUrl = canvas.toDataURL('image/jpeg');
                imagePreview.src = dataUrl;

                conversionMessage.textContent = 'Image converted to JPG.';

                // Handle download button click
                downloadButton.addEventListener('click', () => {
                    let filename = filenameInput.value || 'converted_image.jpg';
                    const anchor = document.createElement('a');
                    anchor.href = dataUrl;
                    anchor.setAttribute('download', filename);
                    anchor.click();

                    // Reset filename input after download
                    filenameInput.value = '';
                });
            };
        };

        reader.readAsDataURL(file);
    });

    // Restore the preview image after downloading
    downloadButton.addEventListener('click', () => {
        imagePreview.src = '';
        conversionMessage.textContent = '';
        imageUpload.value = null;
    });
});
