const topicInput = document.getElementById("topic");
const platformSelect = document.getElementById("platform");
const toneSelect = document.getElementById("tone");
const languageSelect = document.getElementById("language");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const resultBox = document.getElementById("result");
const statusBox = document.getElementById("status");

let generatedPost = "";

const hashtags = {
Instagram:
"#Instagram #SocialMedia #ContentCreator #Trending #Inspiration #Growth #Success #Motivation",
Facebook:
"#Facebook #SocialMedia #Community #Updates #Inspiration #Growth #Success",
LinkedIn:
"#LinkedIn #Professional #Career #Business #Growth #Leadership #Success #Networking",
Twitter:
"#SocialMedia #Trending #Thoughts #Updates #Growth #Success #Motivation"
};

/* =========================
ENGLISH POST GENERATOR
========================= */

function generateEnglishPost(topic, platform, tone) {

const openings = {
    Professional: `Excited to share some thoughts about ${topic}.

In today's rapidly changing world, ${topic} has become an increasingly important topic. Whether you are just getting started or already have experience, there is always something new to learn, explore, and improve.

Understanding ${topic} can open the door to new ideas, opportunities, connections, and personal or professional growth.`,

    Friendly: `Hey everyone! 👋

Today I wanted to talk about something really interesting: ${topic}.

Whether you are completely new to it or already know a little about it, there is always something interesting to discover. Sometimes the simplest topics can teach us the biggest lessons.`,

    Funny: `Okay, let's be honest... 😄

${topic} definitely deserves some attention!

We all have those moments when we say, "I'll start tomorrow." Then tomorrow becomes next week, next week becomes next month, and somehow we are still waiting for the perfect moment. 😂

But maybe today is the day to actually talk about it!`,

    Motivational: `Big things always start with small steps. 🚀

Today, let's talk about ${topic}.

Every successful journey begins with a decision to start. You do not need to have everything figured out from day one. Sometimes, all you need is the courage to take that first step.`,

    Casual: `Just wanted to share some thoughts about ${topic}.

Sometimes we come across a topic, idea, or opportunity that makes us stop and think. For me, ${topic} is one of those topics worth exploring.

There is always something new to learn when we give ourselves the time and opportunity to explore.`
};

const middle = {
    Professional: `There are many reasons why ${topic} deserves our attention.

It can help us develop new skills, understand new perspectives, solve problems, and discover opportunities that we may not have noticed before. In a world where things are constantly changing, continuous learning has become more important than ever.

One of the most valuable lessons is that success rarely happens overnight. Real progress usually comes from consistency, patience, discipline, and the willingness to keep improving.

Every small step matters. Every new experience can teach us something valuable. Even challenges that seem difficult at first can become opportunities to grow stronger and more confident.

Another important part of the journey is being open to learning from others. Different people have different experiences, ideas, and approaches, and listening to them can help us see things from a completely new perspective.

The key is to stay focused, keep learning, and remain willing to adapt. When we continue moving forward, even slowly, we can eventually achieve meaningful results.`,

    Friendly: `One of the best things about ${topic} is that it gives us an opportunity to learn, experiment, and connect with other people.

Sometimes we think we need to know everything before getting started. But the truth is, nobody starts as an expert. We learn by trying, making mistakes, asking questions, and improving along the way.

Every small step counts. Every new experience teaches us something. Even when things do not go exactly according to plan, there is usually a lesson hidden inside the experience.

If you are interested in ${topic}, do not be afraid to give it a try. Start with what you know, learn as you go, and gradually build your confidence.

The journey itself can be just as valuable as the final result. So enjoy the process, stay curious, and keep moving forward. 😊`,

    Funny: `The funny thing about ${topic} is that most people probably think they need to be an expert before they even begin.

Spoiler alert: you don't. 😂

Nobody has everything figured out from the beginning. There will be mistakes, unexpected problems, confusing moments, and probably a few "What am I even doing?" moments along the way.

But that's completely normal.

The important thing is to learn from those moments instead of giving up. Try something new, see what works, learn what does not work, and then try again.

Sometimes progress looks impressive, and sometimes progress looks like simply showing up and trying one more time.

So if you have been thinking about ${topic}, maybe this is your sign to stop overthinking and start doing something about it. 😄`,

    Motivational: `${topic} can become an incredible opportunity to learn, grow, and become a better version of yourself.

There will be challenges along the way. There will be moments when things do not go according to plan. There may even be days when you feel like giving up.

But challenges are not the end of the journey. They are part of the journey.

Every mistake can teach you something. Every failure can give you another lesson. Every small achievement can give you another reason to keep moving forward.

Stay consistent.

Stay focused.

Believe in yourself.

Do not compare your journey with someone else's. Everyone has a different starting point, different challenges, different opportunities, and a different path.

The only person you truly need to compete with is the person you were yesterday.

If you improve just a little every day, those small improvements can become something powerful over time.`,

    Casual: `There is always something new to learn when it comes to ${topic}.

The more we explore, the more we understand how many possibilities are available. We can learn from our own experiences, from other people, and even from the challenges we face along the way.

One thing I have learned is that progress does not always have to be huge. Sometimes a small improvement is enough.

You do not need to change everything at once. Start with one small step, learn something new, and then build from there.

With time, those small steps can turn into bigger achievements.

So if ${topic} is something you are interested in, give it a chance. Explore it, learn about it, experiment with it, and see where it takes you.`
};

const endings = {
    Professional: `What are your thoughts on ${topic}?

I would love to hear your experience, ideas, and perspective. Share your thoughts in the comments and let's learn from each other.

Keep learning, keep improving, and keep moving forward. 🚀`,

    Friendly: `Now I want to hear from you! 💬

What do you think about ${topic}? Have you ever tried it, experienced it, or learned something interesting about it?

Share your thoughts in the comments. Let's have a conversation and learn from each other!

Stay positive, keep learning, and keep creating. ❤️`,

    Funny: `So, what is your experience with ${topic}? 😂

Have you tried it already, are you planning to try it, or are you still waiting for that magical "perfect time"?

Let me know in the comments!

And remember: progress is better than perfection. 🚀😄`,

    Motivational: `If you are working on ${topic}, keep going.

Your hard work may not show results immediately, but consistency can create powerful results over time.

Start today. Learn every day. Improve every day.

Your future self will thank you for not giving up. 💪🔥

What is one step you are going to take today?

Share it in the comments! 👇`,

    Casual: `What do you think about ${topic}?

Have you had any experience with it? Do you have any tips, ideas, or lessons to share?

Feel free to share your thoughts in the comments. I'd love to hear what you think. 😊

Keep learning and keep moving forward!`
};

return `${openings[tone]}

${middle[tone]}

${endings[tone]}

${hashtags[platform]}`;
}

/* =========================
ROMAN URDU GENERATOR
========================= */

function generateRomanUrduPost(topic, platform, tone) {

const openings = {
    Professional: `${topic} ke hawale se ek important update share karna chahta hoon.

Aaj ke rapidly changing digital world mein ${topic} ek bohat important aur interesting topic ban chuka hai. Is topic ko samajhna aur is par kaam karna naye opportunities aur growth ka sabab ban sakta hai.

Chahe aap is field mein beginner hain ya pehle se experience rakhte hain, hamesha kuch naya seekhne ka moka hota hai.`,

    Friendly: `Assalam o Alaikum everyone! 👋

Aaj baat karte hain ${topic} ke bare mein.

Ye ek aisa topic hai jisme har din kuch naya seekhne aur discover karne ko mil sakta hai. Kabhi kabhi simple si information bhi hamare liye bohat useful sabit hoti hai.`,

    Funny: `Chalo ji, aaj ${topic} ko thori attention dete hain! 😄

Hum sab kehte hain ke "kal se start karunga."

Phir kal next week ban jata hai, next week next month aur next month... khair samajh gaye! 😂

Lekin shayad ab waqt aa gaya hai ke sirf socha na jaye, balkay kuch kiya bhi jaye.`,

    Motivational: `Har bari kamyabi ek chote qadam se shuru hoti hai. 🚀

Aaj ka topic hai ${topic}.

Apni journey start karne ke liye aap ko perfect conditions ki zaroorat nahi hoti. Sirf ek decision aur ek chota sa step bohat kuch change kar sakta hai.`,

    Casual: `Aaj socha ${topic} ke bare mein kuch share kiya jaye.

Kabhi kabhi koi topic ya idea humein ruk kar sochnay par majboor karta hai. Mere liye ${topic} bhi ek aisa topic hai jo explore karne ke qabil hai.`
};

const middle = {
    Professional: `${topic} ke bohat se benefits hain.

Ye humein naye skills seekhne, apne goals achieve karne aur doosre logon ke saath meaningful connections banane ka moka deta hai.

Success kabhi bhi overnight nahi milti. Is ke liye consistency, patience, learning aur continuous improvement zaroori hoti hai.

Har chota step future mein ek bara result create kar sakta hai. Har experience humein kuch na kuch sikhata hai aur har challenge humein stronger banane mein help karta hai.

Is journey mein doosron se seekhna bhi bohat important hai. Har person ka experience different hota hai aur kisi aur ki ek achi advice hamare liye useful sabit ho sakti hai.

Is liye focused rahen, continuously learn karein aur naye ideas ko accept karte rahen.`,

    Friendly: `${topic} ki sab se interesting baat ye hai ke is mein learning ke saath saath growth ke bohat se opportunities bhi hain.

Kabhi kabhi hum perfect time ka wait karte rehte hain. Lekin reality ye hai ke perfect time ka wait karne ke bajaye start karna zyada important hai.

Har chota step matter karta hai. Har experience humein kuch na kuch sikhata hai.

Agar aap ${topic} mein interested hain to bilkul hesitate na karein. Start karein, mistakes karein, seekhein aur phir improve karein.

Journey ko enjoy karna bhi utna hi important hai jitna destination tak pohanchna.

Aap jitna explore kareinge, utna hi aap ko naye ideas aur opportunities ke bare mein pata chalega.`,

    Funny: `${topic} ke case mein sab se funny baat ye hai ke successful journey ke liye start mein perfect hona zaroori nahi hota.

Mistakes hongi.

Confusion hogi.

Kabhi kabhi lagega ke "main kya kar raha hoon?" 😂

Lekin ye sab journey ka part hai.

Seekhein, mistakes se learn karein, improve karein aur phir dobara try karein.

Perfection ke peeche bhagne ke bajaye progress par focus karein.

Agar koi cheez pehli baar mein perfect nahi hoti to tension lene ki zaroorat nahi. Aakhir hum humans hain, robots nahi! 😄

Important ye hai ke hum ruk na jayein aur har experience se kuch seekhte rahein.`,

    Motivational: `${topic} aap ke liye learning aur growth ka ek great opportunity ban sakta hai.

Journey mein challenges zaroor aayenge. Kabhi results late milenge aur kabhi aisa lagega ke shayad aap ko give up kar dena chahiye.

Lekin yaad rakhein, challenges journey ka end nahi hote. Ye journey ka part hote hain.

Har mistake ek lesson hai.

Har failure ek experience hai.

Har small achievement aap ko aage barhne ka reason deta hai.

Is liye consistent rahen.

Focused rahen.

Apne aap par believe karein.

Apni journey ko doosron ke saath compare na karein. Har person ka starting point aur journey different hoti hai.

Aap ka real competition sirf aap ka kal wala version hai.

Agar aap roz thori si improvement bhi karte hain to time ke saath ye small improvements ek powerful result mein convert ho sakti hain.`,

    Casual: `${topic} ke bare mein hamesha kuch naya seekhne ko mil sakta hai.

Jitna hum explore karte hain, utna hi humein naye opportunities ka pata chalta hai.

Hum apne experiences se, doosron se aur apni mistakes se learn kar sakte hain.

Important ye hai ke hum process ko rush na karein. Time lein, properly learn karein, new ideas try karein aur continuously improve karte rahen.

Har din ki choti progress future mein ek meaningful result create kar sakti hai.

Agar aap kisi cheez mein interested hain to usay chance dena chahiye. Ho sakta hai aap ka first step future mein aap ke liye ek great opportunity ban jaye.`
};

const endings = {
    Professional: `Aap ka ${topic} ke bare mein kya khayal hai?

Apna experience aur opinion comments mein zaroor share karein. Ho sakta hai aap ki ek idea kisi doosre person ke liye inspiration ban jaye.

Keep learning, keep growing aur hamesha forward move karte rahen. 🚀`,

    Friendly: `Ab aap batayein! 💬

${topic} ke bare mein aap ka kya experience hai?

Comments mein apni thoughts zaroor share karein. Let's learn from each other!

Positive rahen, seekhte rahen aur grow karte rahen. ❤️`,

    Funny: `Aap ka ${topic} ke bare mein kya experience hai?

Kya aap ne try kiya hai ya abhi tak "kal se start karunga" wali team mein hain? 😂

Comments mein batao!

Aur yaad rakho: progress is better than perfection. 🚀`,

    Motivational: `Agar aap ${topic} par kaam kar rahe hain to continue rakhein.

Aap ki mehnat ka result shayad aaj nazar na aaye, lekin consistency time ke saath powerful results create kar sakti hai.

Aaj start karein.

Har din seekhein.

Har din improve karein.

Aap ka future self aap ka shukriya ada karega. 💪🔥

Aaj aap konsa ek step lene wale hain?

Comments mein share karein! 👇`,

    Casual: `Aap ka ${topic} ke bare mein kya khayal hai?

Kya aap ka is se related koi experience hai?

Apni thoughts aur ideas comments mein share karein. 😊

Seekhte rahen aur aage barhte rahen!`
};

return `${openings[tone]}

${middle[tone]}

${endings[tone]}

#SocialMedia #Pakistan #ContentCreator #Growth #Success #Motivation`;
}

/* =========================
URDU GENERATOR
========================= */

function generateUrduPost(topic, platform, tone) {

const openings = {
    Professional: `${topic} کے حوالے سے ایک اہم اپڈیٹ شیئر کرنا چاہتا ہوں۔

آج کی تیزی سے بدلتی ہوئی دنیا میں ${topic} ایک اہم اور دلچسپ موضوع بن چکا ہے۔ اس موضوع کو سمجھنا اور اس پر کام کرنا نئی کامیابیوں اور مواقع کا باعث بن سکتا ہے۔

چاہے آپ اس شعبے میں نئے ہیں یا پہلے سے تجربہ رکھتے ہیں، ہمیشہ کچھ نیا سیکھنے کی گنجائش موجود رہتی ہے۔`,

    Friendly: `السلام علیکم سب کو! 👋

آج بات کرتے ہیں ${topic} کے بارے میں۔

یہ ایک ایسا موضوع ہے جس میں ہر دن کچھ نیا سیکھنے اور دریافت کرنے کو مل سکتا ہے۔ بعض اوقات ایک چھوٹی سی معلومات بھی ہمارے لیے بہت فائدہ مند ثابت ہو سکتی ہے۔`,

    Funny: `چلیں جی، آج ${topic} کو تھوڑی توجہ دیتے ہیں! 😄

ہم سب کہتے ہیں کہ "کل سے شروع کروں گا۔"

پھر کل اگلے ہفتے میں بدل جاتا ہے، اگلا ہفتہ اگلے مہینے میں اور پھر... آپ سمجھ ہی گئے ہوں گے! 😂

لیکن شاید اب وقت آ گیا ہے کہ صرف سوچا نہ جائے بلکہ کچھ کیا بھی جائے۔`,

    Motivational: `ہر بڑی کامیابی ایک چھوٹے قدم سے شروع ہوتی ہے۔ 🚀

آج کا موضوع ${topic} ہے۔

اپنی journey شروع کرنے کے لیے آپ کو بہترین حالات کا انتظار کرنے کی ضرورت نہیں۔ صرف ایک فیصلہ اور ایک چھوٹا قدم بہت کچھ تبدیل کر سکتا ہے۔`,

    Casual: `آج سوچا ${topic} کے بارے میں کچھ شیئر کیا جائے۔

کبھی کبھی کوئی موضوع یا خیال ہمیں رک کر سوچنے پر مجبور کرتا ہے۔ میرے لیے ${topic} بھی ایک ایسا موضوع ہے جسے explore کرنا دلچسپ ہے۔`
};

const middle = {
    Professional: `${topic} کے بہت سے فوائد ہیں۔

یہ ہمیں نئی مہارتیں سیکھنے، اپنے مقاصد حاصل کرنے اور دوسرے لوگوں کے ساتھ بہتر تعلقات بنانے کا موقع فراہم کرتا ہے۔

کامیابی کبھی بھی راتوں رات حاصل نہیں ہوتی۔ اس کے لیے مستقل مزاجی، صبر، سیکھنے اور مسلسل بہتری کی ضرورت ہوتی ہے۔

ہر چھوٹا قدم مستقبل میں ایک بڑے نتیجے کا سبب بن سکتا ہے۔ ہر تجربہ ہمیں کچھ نہ کچھ سکھاتا ہے اور ہر مشکل ہمیں پہلے سے زیادہ مضبوط بنا سکتی ہے۔

اس سفر میں دوسروں سے سیکھنا بھی بہت اہم ہے۔ ہر انسان کا تجربہ مختلف ہوتا ہے اور کسی دوسرے شخص کی اچھی advice ہمارے لیے بہت فائدہ مند ثابت ہو سکتی ہے۔

اس لیے اپنے مقصد پر توجہ رکھیں، مسلسل سیکھتے رہیں اور نئے خیالات کو قبول کرتے رہیں۔`,

    Friendly: `${topic} کی سب سے دلچسپ بات یہ ہے کہ اس میں سیکھنے کے ساتھ ساتھ ترقی کے بہت سے مواقع بھی موجود ہیں۔

اکثر ہم بہترین وقت کا انتظار کرتے رہتے ہیں، لیکن حقیقت یہ ہے کہ بہترین وقت کا انتظار کرنے کے بجائے آغاز کرنا زیادہ اہم ہے۔

ہر چھوٹا قدم اہم ہوتا ہے۔ ہر تجربہ ہمیں کچھ نہ کچھ سکھاتا ہے۔

اگر آپ ${topic} میں دلچسپی رکھتے ہیں تو شروع کرنے سے نہ گھبرائیں۔ سیکھیں، غلطیاں کریں، دوبارہ کوشش کریں اور خود کو بہتر بنائیں۔

سفر سے لطف اندوز ہونا بھی منزل تک پہنچنے جتنا ہی اہم ہے۔

جتنا آپ explore کریں گے اتنا ہی آپ کو نئے خیالات اور مواقع کے بارے میں معلوم ہوگا۔`,

    Funny: `${topic} کے معاملے میں سب سے دلچسپ بات یہ ہے کہ کامیاب ہونے کے لیے شروع سے ہی perfect ہونا ضروری نہیں۔

غلطیاں ہوں گی۔

مشکلات آئیں گی۔

کبھی کبھی یہ بھی لگے گا کہ "میں آخر کر کیا رہا ہوں؟" 😂

لیکن یہی سفر کا حصہ ہے۔

غلطیوں سے سیکھیں، خود کو بہتر کریں اور دوبارہ کوشش کریں۔

کمال کے پیچھے بھاگنے کے بجائے progress پر focus کریں۔

اگر کوئی کام پہلی بار میں perfect نہیں ہوتا تو پریشان ہونے کی ضرورت نہیں۔ آخر ہم انسان ہیں، robots نہیں! 😄

اہم بات یہ ہے کہ ہم رکیں نہیں اور ہر تجربے سے کچھ نہ کچھ سیکھتے رہیں۔`,

    Motivational: `${topic} آپ کے لیے سیکھنے اور ترقی کرنے کا ایک بہترین موقع بن سکتا ہے۔

اس سفر میں مشکلات ضرور آئیں گی۔ کبھی نتائج دیر سے ملیں گے اور کبھی ایسا محسوس ہوگا کہ شاید ہمت ہار دینی چاہیے۔

لیکن یاد رکھیں، مشکلات سفر کا اختتام نہیں ہوتیں بلکہ سفر کا حصہ ہوتی ہیں۔

ہر غلطی ایک سبق ہے۔

ہر ناکامی ایک تجربہ ہے۔

ہر چھوٹی کامیابی آگے بڑھنے کی ایک نئی وجہ دیتی ہے۔

اس لیے مستقل مزاج رہیں۔

اپنے مقصد پر توجہ رکھیں۔

اپنے آپ پر یقین کریں۔

اپنے سفر کا دوسروں کے سفر سے موازنہ نہ کریں۔ ہر انسان کا راستہ، حالات اور مواقع مختلف ہوتے ہیں۔

آپ کا اصل مقابلہ صرف آپ کے کل والے version سے ہے۔

اگر آپ ہر روز تھوڑی سی بھی بہتری لاتے ہیں تو وقت کے ساتھ یہ چھوٹی چھوٹی تبدیلیاں ایک بڑا نتیجہ پیدا کر سکتی ہیں۔`,

    Casual: `${topic} کے بارے میں ہمیشہ کچھ نیا سیکھنے کو مل سکتا ہے۔

جتنا ہم explore کرتے ہیں، اتنے ہی نئے مواقع سامنے آتے ہیں۔

ہم اپنے تجربات سے، دوسرے لوگوں سے اور اپنی غلطیوں سے سیکھ سکتے ہیں۔

اہم بات یہ ہے کہ ہم process کو جلدی نہ کریں۔ وقت لیں، صحیح طریقے سے سیکھیں، نئے ideas try کریں اور مسلسل خود کو بہتر بناتے رہیں۔

ہر دن کی چھوٹی progress مستقبل میں ایک meaningful result پیدا کر سکتی ہے۔

اگر آپ کسی چیز میں دلچسپی رکھتے ہیں تو اسے ایک موقع ضرور دینا چاہیے۔ ممکن ہے آپ کا پہلا قدم مستقبل میں آپ کے لیے ایک بہترین موقع بن جائے۔`
};

const endings = {
    Professional: `آپ کا ${topic} کے بارے میں کیا خیال ہے؟

اپنی رائے اور تجربہ کمنٹس میں ضرور شیئر کریں۔ ممکن ہے آپ کی ایک بات کسی دوسرے شخص کے لیے inspiration بن جائے۔

سیکھتے رہیں، آگے بڑھتے رہیں اور اپنے مقصد پر یقین رکھیں۔ 🚀`,

    Friendly: `اب آپ بتائیں! 💬

${topic} کے بارے میں آپ کا کیا تجربہ ہے؟

کمنٹس میں اپنی رائے ضرور شیئر کریں۔ Let's learn from each other!

مثبت رہیں، سیکھتے رہیں اور آگے بڑھتے رہیں۔ ❤️`,

    Funny: `آپ کا ${topic} کے بارے میں کیا تجربہ ہے؟

کیا آپ نے اسے try کیا ہے یا ابھی تک "کل سے شروع کروں گا" والی ٹیم میں ہیں؟ 😂

کمنٹس میں ضرور بتائیں!

اور یاد رکھیں: progress is better than perfection. 🚀`,

    Motivational: `اگر آپ ${topic} پر کام کر رہے ہیں تو جاری رکھیں۔

آپ کی محنت کا نتیجہ شاید آج نظر نہ آئے، لیکن مستقل مزاجی وقت کے ساتھ بہترین نتائج پیدا کر سکتی ہے۔

آج شروع کریں۔

ہر دن سیکھیں۔

ہر دن خود کو بہتر بنائیں۔

آپ کا future self آپ کا شکریہ ادا کرے گا۔ 💪🔥

آج آپ کون سا ایک قدم اٹھانے والے ہیں؟

کمنٹس میں شیئر کریں! 👇`,

    Casual: `آپ کا ${topic} کے بارے میں کیا خیال ہے؟

کیا آپ کا اس سے متعلق کوئی تجربہ ہے؟

اپنی thoughts اور ideas کمنٹس میں ضرور share کریں۔ 😊

سیکھتے رہیں اور آگے بڑھتے رہیں!`
};

return `${openings[tone]}

${middle[tone]}

${endings[tone]}

#SocialMedia #Pakistan #ContentCreator #Growth #Success #Motivation`;
}

/* =========================
GENERATE BUTTON
========================= */

function generatePost() {

const topic = topicInput.value.trim();
const platform = platformSelect.value;
const tone = toneSelect.value;
const language = languageSelect.value;

if (!topic) {
    showStatus("Please enter a topic first.", "error");
    topicInput.focus();
    return;
}

generateBtn.disabled = true;
generateBtn.innerHTML =
    `<span class="spinner"></span> Generating...`;

setTimeout(() => {

    if (language === "English") {

        generatedPost =
            generateEnglishPost(topic, platform, tone);

    } else if (language === "Roman Urdu") {

        generatedPost =
            generateRomanUrduPost(topic, platform, tone);

    } else {

        generatedPost =
            generateUrduPost(topic, platform, tone);
    }

    resultBox.innerHTML = `
        <div class="post-content">
            ${escapeHtml(generatedPost).replace(/\n/g, "<br>")}
        </div>
    `;

    copyBtn.disabled = false;

    generateBtn.disabled = false;

    generateBtn.innerHTML =
        `<span>✦</span> Generate Post`;

    showStatus(
        "Long post generated successfully!",
        "success"
    );

}, 700);

}

/* =========================
ESCAPE HTML
========================= */

function escapeHtml(text) {

const div = document.createElement("div");

div.textContent = text;

return div.innerHTML;

}

/* =========================
COPY BUTTON
========================= */

async function copyPost() {

if (!generatedPost) return;

try {

    await navigator.clipboard.writeText(generatedPost);

    showStatus(
        "Post copied to clipboard!",
        "success"
    );

    copyBtn.textContent = "Copied!";

    setTimeout(() => {
        copyBtn.textContent = "Copy";
    }, 1500);

} catch (error) {

    showStatus(
        "Unable to copy the post.",
        "error"
    );
}

}

/* =========================
STATUS MESSAGE
========================= */

function showStatus(message, type) {

statusBox.textContent = message;

statusBox.className =
    `status ${type}`;

setTimeout(() => {

    statusBox.textContent = "";

    statusBox.className = "status";

}, 2500);

}

/* =========================
EVENT LISTENERS
========================= */

generateBtn.addEventListener(
"click",
generatePost
);

copyBtn.addEventListener(
"click",
copyPost
);

topicInput.addEventListener(
"keydown",
(event) => {

    if (
        event.key === "Enter" &&
        event.ctrlKey
    ) {
        generatePost();
    }

}

);