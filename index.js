const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.wattpad.com/story/128706149-beyaz-ve-k%C4%B1rm%C4%B1z%C4%B1';

axios.get(url)
  .then(response => {
    const htmlContent = response.data;
    const $ = cheerio.load(htmlContent);

    const linkTags = $('a.story-parts__part');  // Linkleri içeren <a> etiketlerini bul

    const links = [];
    linkTags.each((index, element) => {
      const link = $(element).attr('href');  // Link URL'sini al
      links.push(link);
    });

    console.log(links);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
