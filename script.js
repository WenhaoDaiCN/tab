// 初始化变量
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
let currentCategory = 'all';
let categories = JSON.parse(localStorage.getItem('categories')) || [];

// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 添加新书签
    document.getElementById('add-bookmark').addEventListener('click', () => {
        document.getElementById('add-bookmark-modal').classList.add('modal-open');
    });

    document.getElementById('save-bookmark').addEventListener('click', () => {
        let url = document.getElementById('bookmark-url').value;
        const title = document.getElementById('bookmark-title').value;
        const category = document.getElementById('bookmark-category').value;
        if (url && title) {
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            const icon = `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`;
            bookmarks.push({ url, title, icon, category });
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            renderBookmarks();
            closeModal('add-bookmark-modal');
        }
    });

    // 添加新分类
    document.getElementById('add-category').addEventListener('click', () => {
        document.getElementById('add-category-modal').classList.add('modal-open');
    });

    document.getElementById('save-category').addEventListener('click', () => {
        const categoryName = document.getElementById('category-name').value;
        if (categoryName && !categories.includes(categoryName)) {
            categories.push(categoryName);
            localStorage.setItem('categories', JSON.stringify(categories));
            renderCategories();
            closeModal('add-category-modal');
        }
    });

    // 关闭模态框
    document.getElementById('close-modal').addEventListener('click', () => closeModal('add-bookmark-modal'));
    document.getElementById('close-category-modal').addEventListener('click', () => closeModal('add-category-modal'));

    // 分类切换和删除
    document.getElementById('category-menu').addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            currentCategory = e.target.dataset.category;
            renderCategories(); // 重新渲染分类以更新 active 状态
            renderBookmarks();
        } else if (e.target.dataset.delete) {
            const categoryToDelete = e.target.dataset.delete;
            categories = categories.filter(c => c !== categoryToDelete);
            localStorage.setItem('categories', JSON.stringify(categories));
            if (currentCategory === categoryToDelete) {
                currentCategory = 'all';
            }
            renderCategories();
            renderBookmarks();
        }
    });

    // 初始化
    renderCategories();
    renderBookmarks();
});

function renderBookmarks() {
    const grid = document.getElementById('bookmarks-grid');
    grid.innerHTML = '';
    bookmarks.forEach((bookmark, index) => {
        if (currentCategory === 'all' || bookmark.category === currentCategory) {
            const bookmarkEl = document.createElement('div');
            bookmarkEl.className = 'text-center relative p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200';
            bookmarkEl.innerHTML = `
                <img src="${bookmark.icon}" alt="${bookmark.title}" class="bookmark-icon mx-auto mb-2">
                <p class="text-sm truncate">${bookmark.title}</p>
                <button class="btn btn-xs btn-circle btn-outline absolute top-1 right-1" data-delete="${index}">×</button>
            `;
            bookmarkEl.querySelector('img').addEventListener('click', () => openBookmark(bookmark.url));
            bookmarkEl.querySelector('button').addEventListener('click', (e) => {
                e.stopPropagation();
                deleteBookmark(index);
            });
            grid.appendChild(bookmarkEl);
        }
    });
}

function openBookmark(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    if (window.innerWidth < 768) {
        window.open(url, '_blank');
    } else {
        document.getElementById('web-frame').src = url;
    }
}

function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('modal-open');
    if (modalId === 'add-bookmark-modal') {
        document.getElementById('bookmark-url').value = '';
        document.getElementById('bookmark-title').value = '';
        document.getElementById('bookmark-category').value = categories[0] || '';
    } else if (modalId === 'add-category-modal') {
        document.getElementById('category-name').value = '';
    }
}

function renderCategories() {
    const menu = document.getElementById('category-menu');
    menu.innerHTML = `<li><a class="${currentCategory === 'all' ? 'active' : ''}" data-category="all">所有标签</a></li>`;
    categories.forEach(category => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="flex justify-between items-center">
                <a class="${currentCategory === category ? 'active' : ''}" data-category="${category}">${category}</a>
                <button class="btn btn-xs btn-circle btn-outline" data-delete="${category}">×</button>
            </div>
        `;
        menu.appendChild(li);
    });
    updateBookmarkCategoryOptions();
}

function updateBookmarkCategoryOptions() {
    const select = document.getElementById('bookmark-category');
    select.innerHTML = '';
    categories.forEach(category => {
        select.innerHTML += `<option value="${category}">${category}</option>`;
    });
    // 如果没有分类，添加一个默认选项
    if (categories.length === 0) {
        select.innerHTML = '<option value="">无分类</option>';
    }
}

// 初始化
renderCategories();
renderBookmarks();