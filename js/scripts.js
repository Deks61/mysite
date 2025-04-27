const houses = [
  { name: "Дом у озера", price: 15, area: 180, image: "images/house1.jpg" },
  { name: "Современный коттедж", price: 18, area: 220, image: "images/house2.jpg" },
  { name: "Классический дом", price: 12, area: 150, image: "images/house3.jpg" },
  { name: "Дом в лесу", price: 14, area: 170, image: "images/house4.jpg" },
  { name: "Мини-дом", price: 7, area: 80, image: "images/house5.jpg" },
  { name: "Уютный таунхаус", price: 9, area: 100, image: "images/house6.jpg" },
  { name: "Большой особняк", price: 25, area: 350, image: "images/house7.jpg" },
  { name: "Дом в горах", price: 20, area: 200, image: "images/house8.jpg" },
  { name: "Ранчо", price: 22, area: 300, image: "images/house9.jpg" },
  { name: "Дача у реки", price: 10, area: 120, image: "images/house10.jpg" },
];

function displayHouses(list) {
  const container = document.getElementById('houseList');
  container.innerHTML = '';
  list.forEach(house => {
    container.innerHTML += 
      <div class="house" data-aos="fade-up">
        <img src="${house.image}" alt="${house.name}">
        <div class="info">
          <h3>${house.name}</h3>
          <p>Цена: ${house.price} млн ₽</p>
          <p>Площадь: ${house.area} м²</p>
        </div>
      </div>
    ;
  });
}

function filterHouses() {
  const minPrice = document.getElementById('minPrice').value || 0;
  const maxPrice = document.getElementById('maxPrice').value || Infinity;
  const minArea = document.getElementById('minArea').value || 0;
  const maxArea = document.getElementById('maxArea').value || Infinity;

  const filtered = houses.filter(h => h.price >= minPrice && h.price <= maxPrice && h.area >= minArea && h.area <= maxArea);
  displayHouses(filtered);
}

document.addEventListener('DOMContentLoaded', () => displayHouses(houses));