// Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuButton && mobileMenuCloseButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.remove('hidden-menu', '-translate-x-full');
                mobileMenu.classList.add('translate-x-0');
            });

            mobileMenuCloseButton.addEventListener('click', () => {
                mobileMenu.classList.add('-translate-x-full');
                mobileMenu.classList.remove('translate-x-0');
                setTimeout(() => {
                     if (mobileMenu.classList.contains('-translate-x-full')) {
                        mobileMenu.classList.add('hidden-menu');
                     }
                }, 300);
            });
        }

        // Desktop Search Toggle
        const desktopSearchForm = document.getElementById('desktop-search-form');
        const desktopSearchOpenButton = document.getElementById('desktop-search-open-button');
        const desktopSearchCloseButton = document.getElementById('desktop-search-close-button');
        const desktopSearchActivators = document.getElementById('desktop-search-activators');
        const desktopJoinNowButton = document.getElementById('desktop-join-now-button');


        if (desktopSearchOpenButton && desktopSearchForm && desktopSearchCloseButton && desktopSearchActivators) {
            desktopSearchOpenButton.addEventListener('click', () => {
                desktopSearchForm.classList.remove('hidden');
                desktopSearchActivators.classList.add('hidden');
                desktopSearchForm.querySelector('input').focus();
                 if(desktopJoinNowButton) desktopJoinNowButton.classList.add('lg:ml-[10.5rem]'); // Adjust Join Now button position
            });

            desktopSearchCloseButton.addEventListener('click', () => {
                desktopSearchForm.classList.add('hidden');
                desktopSearchActivators.classList.remove('hidden');
                if(desktopJoinNowButton) desktopJoinNowButton.classList.remove('lg:ml-[10.5rem]');
            });
        }
        
        // Mobile Courses Dropdown
        const mobileCoursesButton = document.getElementById('mobile-courses-button');
        const mobileCoursesSubmenu = document.getElementById('mobile-courses-submenu');
        const mobileCoursesIcon = document.getElementById('mobile-courses-icon');

        if (mobileCoursesButton && mobileCoursesSubmenu && mobileCoursesIcon) {
            mobileCoursesButton.addEventListener('click', () => {
                mobileCoursesSubmenu.classList.toggle('hidden');
                mobileCoursesIcon.classList.toggle('fa-chevron-down');
                mobileCoursesIcon.classList.toggle('fa-chevron-up');
            });
        }

        // Mobile Language Dropdown
        const mobileLangButton = document.getElementById('mobile-lang-button');
        const mobileLangSubmenu = document.getElementById('mobile-lang-submenu');
        const mobileLangIcon = document.getElementById('mobile-lang-icon');

        if (mobileLangButton && mobileLangSubmenu && mobileLangIcon) {
            mobileLangButton.addEventListener('click', () => {
                mobileLangSubmenu.classList.toggle('hidden');
                mobileLangIcon.classList.toggle('fa-chevron-down');
                mobileLangIcon.classList.toggle('fa-chevron-up');
            });
        }

        // Mobile Search Toggle
        const mobileSearchOpenButton = document.getElementById('mobile-search-open-button');
        const mobileSearchForm = document.getElementById('mobile-search-form');

        if (mobileSearchOpenButton && mobileSearchForm) {
            mobileSearchOpenButton.addEventListener('click', () => {
                mobileSearchForm.classList.toggle('hidden');
                if (!mobileSearchForm.classList.contains('hidden')) {
                    mobileSearchForm.querySelector('input').focus();
                }
            });
        }
