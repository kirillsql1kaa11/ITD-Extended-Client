const replaceVersionButton = () => {
    const versionBtn = document.querySelector('button[title="Что нового"]');
    if (versionBtn && versionBtn.textContent !== 'Extended v1.0') {
        versionBtn.textContent = 'Extended v1.0';
    }
};

const replaceChangelog = () => {
    const changelogModal = document.querySelector('._4M-jb-Yf');
    if (changelogModal && !changelogModal.getAttribute('data-extended-replaced')) {
        const changelogContent = changelogModal.parentElement;
        if (changelogContent) {
            changelogContent.innerHTML = `
                <div class="_4M-jb-Yf" data-extended-replaced="true">
                    <span class="BzRajAFf">Extended Client</span>
                    <button type="button" class="xWaW7ynd" onclick="this.closest('.mPvkVXNc').remove();">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div class="V50n6WS3">
                    <div class="op1vWsdX">
                        <div class="_6WE1-ZQb">
                            <span class="wQFhiSkq">v1.0</span>
                            <span class="Lsbi80je">7 марта 2026</span>
                        </div>
                        <ul class="bMJRT07h">
                            <li class="d6UOyTyY">Кнопка Extended в навигации</li>
                            <li class="d6UOyTyY">Настройки скриптов: Автолайкер, Автоподписка, Авто-ответы, Антиспам, Уведомления</li>
                            <li class="d6UOyTyY">Сохранение состояний переключателей</li>
                            <li class="d6UOyTyY">Адаптивный дизайн для мобильных устройств</li>
                        </ul>
                        <div class="vQ8h8naJ"></div>
                    </div>
                </div>
            `;
        }
    }
};

replaceVersionButton();
replaceChangelog();

const changelogObserver = new MutationObserver(() => {
    replaceChangelog();
});
changelogObserver.observe(document.body, { childList: true, subtree: true });

const versionObserver = new MutationObserver(() => {
    replaceVersionButton();
});
versionObserver.observe(document.body, { childList: true, subtree: true });
