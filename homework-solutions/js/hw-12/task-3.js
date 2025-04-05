/*
 На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
      Пример: 
      1.  name: Leanne Graham
          email: Sincere@april.biz
          phone: 1-770-736-8031 x56442
          company: Romaguera-Crona    
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
      __________________________________

      2.  name: Ervin Howell   
          email: Shanna@melissa.tv 
          phone: 010-692-6593 x09125
          company: Deckow-Crist
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)

*/

async function fetchUserData() {
    try {
      // Получаем список пользователей
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await usersResponse.json();
  
      // Для каждого пользователя выполняем 3 запроса: альбомы, фотографии и основной запрос с пользователем
      for (const user of users) {
        const [albums, photos] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`).then(res => res.json()),
          fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${user.id}`).then(res => res.json())
        ]);
  
        // Подсчитываем количество фотографий в альбомах
        const albumPhotoCounts = albums.map(album => {
          const photosInAlbum = photos.filter(photo => photo.albumId === album.id);
          return { albumName: album.title, photoCount: photosInAlbum.length };
        });
  
        // Выводим информацию о пользователе
        console.log(`${user.name}
  ` +
          `email: ${user.email}
  ` +
          `phone: ${user.phone}
  ` +
          `company: ${user.company.name}
  ` +
          `albums:
  ` +
          albumPhotoCounts.map(album => `${album.albumName} (${album.photoCount} photos)`).join('\n') +
          '\n__________________________________');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  fetchUserData();