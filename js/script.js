document.addEventListener('DOMContentLoaded', () => {
  const mainNews = document.getElementById('mainNews');
  const breakingNews = document.getElementById('breakingNews');

  const categoryContent = {
    latest: { img:'https://picsum.photos/800/400?1', desc:'দেশে নতুন করোনা প্রটোকল ঘোষণা করা হয়েছে। শিক্ষাপ্রতিষ্ঠান খোলা-বন্ধের নতুন সিদ্ধান্ত। জনগণকে স্বাস্থ্যবিধি মেনে চলার নির্দেশ দেওয়া হয়েছে। স্থানীয় প্রশাসন সতর্কতা অবলম্বন করছে।' },
    bangladesh: { img:'https://picsum.photos/800/400?2', desc:'বাংলাদেশে নতুন অর্থনীতি রিপোর্ট প্রকাশিত হয়েছে। শিল্প ও বাণিজ্য ক্ষেত্রে ইতিবাচক বৃদ্ধি লক্ষ্য করা গেছে। সরকারের নতুন নীতি এবং উদ্যোগের বিশ্লেষণ করা হয়েছে। স্থানীয় ব্যবসায়ীরা নতুন পরিকল্পনা গ্রহণ করছেন।' },
    international: { img:'https://picsum.photos/800/400?3', desc:'আন্তর্জাতিক সম্মেলনে নতুন চুক্তি স্বাক্ষর করা হয়েছে। দেশগুলো ব্যবসা ও কূটনীতিতে সহযোগিতা বৃদ্ধি করছে। বৈশ্বিক পরিস্থিতি বিশ্লেষণ করা হয়েছে। আন্তর্জাতিক মিডিয়া বিশ্লেষণ প্রকাশ করেছে।' },
    sports: { img:'https://picsum.photos/800/400?4', desc:'জাতীয় ফুটবল লীগে চ্যাম্পিয়ন দল ঘোষণা করা হয়েছে। খেলোয়াড়দের প্রস্তুতি ও কৌশল বিশ্লেষণ করা হয়েছে। টুর্নামেন্টের মূল মুহূর্তগুলি আলোচনা করা হয়েছে। দর্শকরা ম্যাচ উপভোগ করেছেন।' },
    entertainment: { img:'https://picsum.photos/800/400?5', desc:'নতুন চলচ্চিত্র মুক্তি পাচ্ছে। প্রধান অভিনেতা-অভিনেত্রীর সাক্ষাৎকার এবং প্রেক্ষাপটের সংক্ষিপ্ত বিবরণ প্রকাশ করা হয়েছে। চলচ্চিত্র সমালোচকরা রিভিউ প্রকাশ করেছেন। দর্শকরা ইতিমধ্যে সিনেমা উপভোগ করছেন।' }
  };

  function showNews(category) {
    const content = categoryContent[category];
    mainNews.innerHTML = `<article class="bg-white shadow rounded-lg overflow-hidden">
      <img src="${content.img}" class="w-full h-64 object-cover" alt="${category}">
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-2">${category}</h2>
        <p class="text-gray-700">${content.desc}</p>
      </div>
    </article>`;
  }

  // Page load: প্রথম navbar topic দেখাবে
  const firstCategory = document.querySelector('#navbar a').dataset.category;
  showNews(firstCategory);

  // Navbar click
  document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const category = link.dataset.category;
      showNews(category);
      mainNews.scrollIntoView({behavior:'smooth'});
    });
  });

  // Popular & Trending
  ['popularNews','trendingNews'].forEach(id => {
    document.querySelectorAll(`#${id} li`).forEach(item => {
      item.addEventListener('click', () => {
        mainNews.innerHTML = `<article class="bg-white shadow rounded-lg overflow-hidden">
          <img src="${item.dataset.img}" class="w-full h-64 object-cover" alt="${item.dataset.title}">
          <div class="p-4">
            <h2 class="text-2xl font-bold mb-2">${item.dataset.title}</h2>
            <p class="text-gray-700">${item.dataset.desc}</p>
          </div>
        </article>`;
        mainNews.scrollIntoView({behavior:'smooth'});
      });
    });
  });

});
