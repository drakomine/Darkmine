document.getElementById('ipDisplay').addEventListener('click', function() {
            const ipText = document.getElementById('ipText').innerText;
            const copyIcon = document.getElementById('copyIcon');

            const ipToCopy = ipText; 

            navigator.clipboard.writeText(ipToCopy).then(() => {
                copyIcon.style.backgroundColor = '#38C25B'; // Green color when copied
                copyIcon.style.mask = 'url("https://www.svgrepo.com/show/496033/check-01.svg") no-repeat center / contain';
                copyIcon.style.webkitMask = 'url("https://www.svgrepo.com/show/496033/check-01.svg") no-repeat center / contain';
                
                setTimeout(() => {
                    copyIcon.style.backgroundColor = 'var(--primary-accent)'; // Revert to original color
                    copyIcon.style.mask = 'url("https://www.svgrepo.com/show/496032/copy-01.svg") no-repeat center / contain';
                    copyIcon.style.webkitMask = 'url("https://www.svgrepo.com/show/496032/copy-01.svg") no-repeat center / contain';
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy IP: ', err);
                alert('Failed to copy IP. Please copy manually: ' + ipToCopy);
            });
        });
