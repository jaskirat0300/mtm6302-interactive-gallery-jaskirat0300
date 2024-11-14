
const images = [
    { thumbnail: 'https://images.unsplash.com/photo-1730148139333-1dc38fa04f05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hd: 'https://images.unsplash.com/photo-1730148139333-1dc38fa04f05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam sem, pulvinar molestie sagittis ac, cursus sed purus. Morbi efficitur enim vitae magna luctus imperdiet. Vestibulum nec enim nec ' },
    { thumbnail: 'https://images.unsplash.com/photo-1725714834412-7d7154ac4e4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hd: 'https://images.unsplash.com/photo-1725714834412-7d7154ac4e4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Image 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam sem, pulvinar molestie sagittis ac, cursus sed purus. Morbi efficitur enim vitae magna luctus imperdiet. Vestibulum nec enim nec ' },
    { thumbnail: 'https://images.unsplash.com/photo-1729892938035-91ccb9a0419b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hd: 'https://images.unsplash.com/photo-1729892938035-91ccb9a0419b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Image 3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam sem, pulvinar molestie sagittis ac, cursus sed purus. Morbi efficitur enim vitae magna luctus imperdiet. Vestibulum nec enim nec ' },
    { thumbnail: 'https://images.unsplash.com/photo-1730416933190-47c8c953011c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hd: 'https://images.unsplash.com/photo-1730416933190-47c8c953011c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Image 4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam sem, pulvinar molestie sagittis ac, cursus sed purus. Morbi efficitur enim vitae magna luctus imperdiet. Vestibulum nec enim nec ' },
    { thumbnail: 'https://images.unsplash.com/photo-1730396386050-564bb356045d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hd: 'https://images.unsplash.com/photo-1730396386050-564bb356045d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Image 5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam sem, pulvinar molestie sagittis ac, cursus sed purus. Morbi efficitur enim vitae magna luctus imperdiet. Vestibulum nec enim nec ' },
    { thumbnail: 'https://images.unsplash.com/photo-1726094051307-a55a8ea52314?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hd: 'https://images.unsplash.com/photo-1726094051307-a55a8ea52314?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Image 6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam sem, pulvinar molestie sagittis ac, cursus sed purus. Morbi efficitur enim vitae magna luctus imperdiet. Vestibulum nec enim nec ' },
    { thumbnail: 'https://images.unsplash.com/photo-1721332154191-ba5f1534266e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hd: 'https://images.unsplash.com/photo-1721332154191-ba5f1534266e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Image 7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam sem, pulvinar molestie sagittis ac, cursus sed purus. Morbi efficitur enim vitae magna luctus imperdiet. Vestibulum nec enim nec ' },
    { thumbnail: 'https://images.unsplash.com/photo-1730774344169-154bc63978d9?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hd: 'https://images.unsplash.com/photo-1730774344169-154bc63978d9?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Image 8Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam sem, pulvinar molestie sagittis ac, cursus sed purus. Morbi efficitur enim vitae magna luctus imperdiet. Vestibulum nec enim nec ' },
    { thumbnail: 'https://images.unsplash.com/photo-1731068471639-299cf797b472?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hd: 'https://images.unsplash.com/photo-1731068471639-299cf797b472?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Image 9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam sem, pulvinar molestie sagittis ac, cursus sed purus. Morbi efficitur enim vitae magna luctus imperdiet. Vestibulum nec enim nec ' },
    { thumbnail: 'https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hd: 'https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Image 10Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam sem, pulvinar molestie sagittis ac, cursus sed purus. Morbi efficitur enim vitae magna luctus imperdiet. Vestibulum nec enim nec ' },
    { thumbnail: 'https://images.unsplash.com/photo-1726499642197-e84767270f24?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hd: 'https://images.unsplash.com/photo-1726499642197-e84767270f24?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Image 11Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam sem, pulvinar molestie sagittis ac, cursus sed purus. Morbi efficitur enim vitae magna luctus imperdiet. Vestibulum nec enim nec ' },
    { thumbnail: 'https://images.unsplash.com/photo-1729505621471-ea543f4a0a6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', hd: 'https://images.unsplash.com/photo-1729505621471-ea543f4a0a6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Image 12Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam sem, pulvinar molestie sagittis ac, cursus sed purus. Morbi efficitur enim vitae magna luctus imperdiet. Vestibulum nec enim nec ' },
];


const gallery = document.querySelector('.gallery');
const hdView = document.querySelector('.hd-view');
const hdImage = document.getElementById('hd-image');
const caption = document.getElementById('caption');


images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image.thumbnail;
    img.alt = `Thumbnail ${index + 1}`;
    img.dataset.hd = image.hd;
    img.dataset.caption = image.caption;
    gallery.appendChild(img);
});


gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        hdImage.src = event.target.dataset.hd;
        caption.textContent = event.target.dataset.caption;
        hdView.classList.remove('hidden');
    }
});

hdView.addEventListener('click', () => {
    hdView.classList.add('hidden');
});
