var Crawler = require("crawler"),
    url = 'https://www.google.com/search?hl=en&num=100&q=' 
          + encodeURI(process.argv.slice(2).join(' '));

(new Crawler).queue({
    uri: url,
    userAgent: ["SeoRank Crawler: SeoRankBot/0.1 (+https://www.seorank.tn/contact-referencement-web-tunisie/)", "Novatis Crawler: NovatisBot/0.1 (+https://www.novatis.tn/contact-agence-novatis/)", "Opera/9.80 (J2ME/MIDP; Opera Mini/4.2.14912/870; U; id) Presto/2.4.15", "APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html)", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)", "Googlebot/2.1 (+http://www.googlebot.com/bot.html)", "Mozilla/5.0 (compatible; Googlebot/2.1; startmebot/1.0; +https://start.me/bot)", "Googlebot/2.1 (+http://www.google.com/bot.html)", "Mozilla/5.0 (compatible; Googlebot/2.1; http://www.google.com/bot.html)", "Mozilla/5.0 (compatible;acapbot/0.1;treat like Googlebot)", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://import.io)", "Googlebot-Image/1.0", "Googlebot", "Google Crawler: Googlebot/2.1 (+http://www.google.com/bot.html)", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)/Nutch-2.3.1", "Googlebot/2.1; +http://www.google.com/bot.html)", "OnPageBot (compatible; Googlebot 2.1; +https://bot.onpage.org/)", "Mozilla/5.0 (compatible; Googlebot/2.1 +http://www.googlebot.com/bot.html)", "Mozilla/5.0 (compatible;acapbot/0.1.;treat like Googlebot)", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Chrome/27.0.1453 Safari/537.36 GoogleBot/2.1", "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; Google Web Preview Analytics) Chrome/27.0.1453 Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.4 (KHTML, like Gecko; Google Page Speed Insights) Chrome/22.0.1229 Safari/537.4 GoogleBot/2.1"],
    rotateUA: true,
    // proxy: "socks5://127.0.0.1:9050",
    callback: function(error, response) {
        if (error) {
            console.log(error)
        } else {
            // console.log(response.$('cite').text());
            // response.headers
            console.log(response.statusCode);
        }
    }
});
