const puppeteer = require("puppeteer");

async function vdp(url, dev = false) {
  let browser;
  try {
    const URL = "https://videodownloaderpro.net/en5/";
    browser = await puppeteer.launch({
      headless: !dev,
      args: ["--disable-setuid-sandbox", "--disable-notifications"],
      ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
    );
    await page.goto(URL);
    await page.type("#search", url, { delay: 0 });
    await page.click("button[type=submit]");
    await page.waitForSelector(".videoImage");

    const result = await page.evaluate(() => {
      console.log("Hello world");
      const thub = document
        .querySelector(".videoImage")
        .style.backgroundImage.replace('url("', "")
        .replace('")', "")
        ? document
            .querySelector(".videoImage")
            .style.backgroundImage.replace('url("', "")
            .replace('")', "")
        : "https://res.cloudinary.com/alasim/image/upload/v1638853249/hosting%20content/jk-placeholder-image_lj3awz.jpg";
      console.log(thub);
      const title = document.querySelector(".videoTitle")
        ? document.querySelector(".videoTitle").innerText
        : "No title";
      const duration = document.querySelector(".timeCode")
        ? document.querySelector(".timeCode").innerText
        : "";
      const link_group = [...document.querySelectorAll(".downloadLinks")];

      let links = link_group.map((link) => {
        const format = link.querySelector(".formats").innerText;
        const quality = link.querySelector(".quality").innerText;
        const url = link.querySelector("a").href;
        return { format, quality, url };
      });

      return {
        info: { title, thub, duration },
        links,
      };
    });
    browser.close();
    if (url.includes("instagram.com")) {
      const data = await insta(url, dev);
      console.log(data);
      result.info.thub = data.thub;
      result.links = [];
      result.links.push({ format: "MP4", quality: "SD", url: data.link });
    }
    return result;
  } catch (error) {
    // browser.close();
    console.log(error);
  }
}

function insta(url, dev) {
  return new Promise(async (resolve, reject) => {
    let browser;
    try {
      const URL = "https://snapinsta.app/";
      browser = await puppeteer.launch({
        headless: !dev,
        args: ["--disable-setuid-sandbox", "--disable-notifications"],
        ignoreHTTPSErrors: true,
      });
      const page = await browser.newPage();
      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
      );
      await page.goto(URL);
      await page.type("#url", url, { delay: 0 });
      await page.click("#send");
      await page.waitForSelector(".download-items__thumb");

      const result = await page.evaluate(() => {
        const thub = document.querySelector(".download-items__thumb img")
          ? document.querySelector(".download-items__thumb img").src
          : "https://res.cloudinary.com/alasim/image/upload/v1638853249/hosting%20content/jk-placeholder-image_lj3awz.jpg";
        const link = document.querySelector(".download-items__btn a").href;
        return {
          thub,
          link,
        };
      });
      browser.close();
      resolve(result);
    } catch (error) {
      browser.close();
      console.log(error);
      reject(error);
    }
  });
}

module.exports = vdp;
