var Crawler = require("crawler");

var websites = process.argv.slice(2);

console.log(websites);


var c = new Crawler({
    maxConnections: 10,
    userAgent: [
    	"SeoRank Crawler: SeoRankBot/0.1 (+https://www.seorank.tn/contact-referencement-web-tunisie/)", 
    	"Novatis Crawler: NovatisBot/0.1 (+https://www.novatis.tn/contact-agence-novatis/)",
    	"Opera/9.80 (J2ME/MIDP; Opera Mini/4.2.14912/870; U; id) Presto/2.4.15",
    	"APIs-Google (+https://developers.google.com/webmasters/APIs-Google.html)",
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        "Googlebot/2.1 (+http://www.googlebot.com/bot.html)",
        "Mozilla/5.0 (compatible; Googlebot/2.1; startmebot/1.0; +https://start.me/bot)",
        "Googlebot/2.1 (+http://www.google.com/bot.html)",
        "Mozilla/5.0 (compatible; Googlebot/2.1; http://www.google.com/bot.html)",
        "Mozilla/5.0 (compatible;acapbot/0.1;treat like Googlebot)",
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://import.io)",
        "Googlebot-Image/1.0",
        "Googlebot",
        "Google Crawler: Googlebot/2.1 (+http://www.google.com/bot.html)",
        "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)/Nutch-2.3.1",
        "Googlebot/2.1; +http://www.google.com/bot.html)",
        "OnPageBot (compatible; Googlebot 2.1; +https://bot.onpage.org/)",
        "Mozilla/5.0 (compatible; Googlebot/2.1 +http://www.googlebot.com/bot.html)",
        "Mozilla/5.0 (compatible;acapbot/0.1.;treat like Googlebot)",
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko; Google Page Speed Insights) Chrome/27.0.1453 Safari/537.36 GoogleBot/2.1",
        "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; Google Web Preview Analytics) Chrome/27.0.1453 Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.4 (KHTML, like Gecko; Google Page Speed Insights) Chrome/22.0.1229 Safari/537.4 GoogleBot/2.1"
    ],
    rotateUA: true,
    // This will be called for each crawled page
    callback: function(error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
        }
        done();
    }
});

websites.forEach(
	function(website) {
		c.queue(website);
	}
);

// Queue just one URL, with default callback
c.queue('http://www.amazon.com');
// Queue a list of URLs
c.queue(['http://www.google.com/', 'http://www.yahoo.com']);
// Queue URLs with custom callbacks & parameters
// c.queue([{
//     uri: 'http://parishackers.org/',
//     jQuery: false,
//     // The global callback won't be called
//     callback: function(error, res, done) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);
// Queue some HTML code directly without grabbing (mostly for tests)
// c.queue([{
//     html: '<p>This is a <strong>test</strong></p>'
// }]);