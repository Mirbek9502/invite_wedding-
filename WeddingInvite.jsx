import React, { useEffect, useState } from "react";

export default function WeddingInvite() {
  const weddingDate = new Date("2025-09-06T17:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/ChatGPT Image 25 июн. 2025 г., 18_01_28.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <audio autoPlay loop className="hidden">
        <source src="/sultan-sadyraliev-sen-barda-zhany-yr-2025.mp3" type="audio/mp3" />
      </audio>

      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-6 text-center">
        <h2 className="text-5xl mb-2" style={{ fontFamily: 'Leamon Tuesday, cursive' }}>Wedding Day</h2>
        <p className="text-xl text-amber-300 mb-4">06.09.2025 | начало вечера в 17:00</p>

        <h1 className="text-4xl font-bold mb-4 text-white" style={{ fontFamily: 'Leamon Tuesday, cursive' }}>Мирбек & Ализа</h1>
        <p className="text-lg max-w-xl mb-6">
          Дорогие друзья и близкие!<br />
          Мы счастливы пригласить вас на наш особенный день — день, когда мы скажем друг другу «да» и начнём новую главу нашей жизни вместе.
        </p>

        <div className="bg-white bg-opacity-20 text-black p-4 mb-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-white">Сентябрь 2025</h3>
          <div className="grid grid-cols-7 gap-2 text-sm">
            {[...Array(31)].map((_, i) => (
              <div
                key={i}
                className={`p-2 rounded-full ${i + 1 === 6 ? 'bg-yellow-400 text-white font-bold' : 'bg-white text-black'}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        <img src="/wedding1.jpg" className="rounded-lg mb-6 max-w-md" alt="wedding scenery" />

        <div className="bg-white bg-opacity-10 p-6 rounded-lg mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Программа вечера</h2>
          <ul className="space-y-3">
            <li>17:00 💛 Встреча гостей</li>
            <li>17:30 💛 Фуршет</li>
            <li>18:00 💛 Банкет</li>
          </ul>
        </div>

        <img src="/restaurant-yrysky.jpg" className="rounded-lg mb-6 max-w-md" alt="Ресторан Ырыскы" />
        <p className="text-lg font-medium mb-6">Место проведения: ресторан «Ырыскы», ул. Фрунзе, 160</p>

        <div className="text-2xl font-bold mb-6">
          До свадьбы осталось:<br />
          <span className="text-amber-200">
            {timeLeft.days}д {timeLeft.hours}ч {timeLeft.minutes}м {timeLeft.seconds}с
          </span>
        </div>

        <form className="bg-white bg-opacity-10 p-6 rounded-lg max-w-md w-full mb-8">
          <h2 className="text-xl font-semibold mb-4">Подтвердите участие 👇</h2>
          <input type="text" placeholder="Ваше имя" className="w-full p-2 mb-3 rounded bg-white bg-opacity-80 text-black" required />
          <input type="text" placeholder="Сколько человек с вами?" className="w-full p-2 mb-3 rounded bg-white bg-opacity-80 text-black" required />
          <input type="text" placeholder="Ваш номер телефона" className="w-full p-2 mb-4 rounded bg-white bg-opacity-80 text-black" />
          <button type="submit" className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded w-full">Отправить</button>
        </form>

        <div className="w-full max-w-xl mb-8">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.7929390765265!2d74.60592077609897!3d42.87138007115456"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-2 border-white"
          ></iframe>
        </div>

        <p className="mt-4 text-sm italic">Той ээлери: Кулчун и Рая</p>

        <p className="mt-8 text-md font-medium">
          📸 Все фото и видео со свадьбы можно добавлять в наш телеграм-канал:<br />
          <a href="https://t.me/mirbekaliza" className="text-amber-300 underline" target="_blank" rel="noopener noreferrer">
            https://t.me/mirbekaliza
          </a>
        </p>
      </div>
    </div>
  );
}
