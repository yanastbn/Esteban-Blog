document.addEventListener('DOMContentLoaded', () => {
    // --- BLOG DATA (Content for Day Cards) ---
    const blogData = {
        "title": "WMSU BSCS Educational Tour 2025",
        "subtitle": "Eight days. One tour. A lifetime of lessons and memories.",
        "hero": {
            "image": "d2-2.jpg",
            "position": "center 100%"
        },
        "days": [
            // DAY 1 
            {
                "day": 1, "title": "Ready, Set, Manila!", "date": "June 8, 2025",
                "summary": "Our journey began as we landed in Manila, diving headfirst into the nation's rich history in the walled city of Intramuros and ending the day with the modern vibes of the SM Mall of Asia.",
                "coverImage": "d1-6.jpg",
                "coverPosition": "center 75%",
                "content": {
                    "introduction": "Our BSCS educational tour officially began when we arrived at Ninoy Aquino International Airport (NAIA) around 8 AM. We flew from Zamboanga City and landed in Metro Manila, excited and curious about what the week would bring. Of course, I had to take a quick photo outside the airport — first stop of the trip!",
                    "sections": [
                        { "type": "image", "src": "d1-1.jpg", "caption": "Touchdown in Manila!", "width": "30%" },
                        { "type": "paragraph", "text": "We were warmly welcomed by <strong>DJM Travel & Tours Services</strong>, the agency that handled everything for our tour. They didn’t just guide us, they also provided our accommodation. We stayed at their dormitory, which was clean, cozy, and perfect for resting after long days. They also served as our official tour guides throughout the week. Ate Melai was our tour guide for the day and Kuya Enan guided us throughout the rest of the tour." },
                        { "type": "divider" },
                        { "type": "heading", "text": "Intramuros – The Walled City of Manila" },
                        { "type": "paragraph", "text": "After we settled in, our first activity was a city tour. We headed to Intramuros, one of the most historic places in Manila. <em>Intramuros</em>, which means “within the walls” in Spanish, was the original city of Manila during the Spanish colonial period. Built in the late 1500s, it served as the center of government, religion, and education for over 300 years." },
                        { "type": "image", "src": "d1-2.jpg", "caption": "The Palacio del Gobernador building.", "width": "30%" },
                        { "type": "paragraph", "text": "<strong>Palacio del Gobernador</strong> – This building used to be the residence of the Spanish Governor-General. Today, it houses government offices like the Commission on Elections (COMELEC). Its Spanish-inspired design still reflects the elegance and authority of its past." },
                        { "type": "image", "src": "d1-3.jpg", "caption": "The Manila Cathedral.", "width": "30%" },
                        { "type": "paragraph", "text": "<strong>Manila Cathedral</strong> – Also known as the Minor Basilica of the Immaculate Conception, the cathedral is one of the oldest and most beautiful churches in the country. It has been rebuilt several times but remains an iconic symbol of Filipino faith and resilience." },
                        { "type": "gallery", "columns": 2, "images": [ { "src": "d1-4.jpg" }, { "src": "d1-5.jpg"} ]},
                        { "type": "paragraph", "text": "<strong>Jose Rizal Museum</strong> – We visited the museum inside Fort Santiago that honors the life of Dr. Jose Rizal, our national hero. It was humbling to stand in a place that held so much historical value." },
                        { "type": "image", "src": "d1-6.jpg", "caption": "Our group photo at the historic Fort Santiago.", "width": "1100px" },
                        { "type": "paragraph", "text": "<strong>Fort Santiago</strong> – One of the oldest Spanish fortresses in the Philippines. This is where Jose Rizal was imprisoned before his execution in 1896. Walking through the fort felt emotional, knowing what Rizal went through." },
                        { "type": "divider" },
                        { "type": "heading", "text": "Evening at SM Mall of Asia (MOA)" },
                        { "type": "paragraph", "text": "After our historical tour, we had some free time and visited SM Mall of Asia, one of the largest shopping malls in the Philippines. We didn’t shop much, but we enjoyed walking around, trying snacks, and just taking it all in." },
                        { "type": "gallery", "columns": 2, "images": [ { "src": "d1-7.jpg", "caption": "The giant MOA Eye ferris wheel."}, { "src": "d1-8.jpg", "caption": "The relaxing view near the bay area." } ]},
                        { "type": "paragraph", "text": "As the sun went down, the view near the bay area was relaxing and picture-perfect. At night, the mall lights and the seaside breeze gave us a peaceful way to end a long, fun day." }
                    ],
                    "conclusion": "Our first day was already packed with experiences. From learning about our country’s history in Intramuros to enjoying the city vibe at MOA, it was a great start to the tour. It reminded me that as tech students, understanding our past gives us the perspective to build better solutions for the future."
                }
            },
            
            // DAY 2 
            {
                "day": 2, "title": "A Glimpse into the Future", "date": "June 9, 2025",
                "summary": "An inspiring day visiting the tech industry giants, Foundever PH and Google Philippines, seeing firsthand how classroom concepts are applied in the real world.",
                "coverImage": "d2-logo.png",
                "coverPosition": "center 5%",
                "content": {
                    "introduction": "Today was the real start of our educational tour — the day we stepped into the actual tech industry. As BSCS students, this was what we were looking forward to the most: to experience how things work in real companies, outside the classroom. We had two major company visits today — Foundever PH in the morning and Google Philippines in the afternoon — and both completely blew me away in different ways.",
                    "sections": [
                        { "type": "heading", "text": "Morning Session: A Deep Dive into Foundever PH" },
                        { "type": "paragraph", "text": "Our day started early with a visit to Foundever PH, located at the Technopoint Building in Pasig City. As soon as we arrived, the environment already felt professional yet welcoming. I took a photo in front of their logo wall — just seeing the Foundever name made me feel like I was really stepping into something big." },
                        { "type": "image", "src": "d2-1.jpg", "width": "30%", "caption": "Foundever logo wall." },
                        { "type": "paragraph", "text": "I also made sure to take a photo of my visitor ID." },
                        { "type": "image", "src": "d2-6.jpg", "width": "30%", "caption": "My visitor ID and jacket." },
                        { "type": "paragraph", "text": "We were welcomed by their staff and led to a briefing area where the orientation started. Foundever, which was formerly known as Sitel Group®, is a global customer experience company with clients all over the world. They operate in more than 45 languages and use technology like AI, cloud computing, and data analytics to manage customer service operations." },
                        { "type": "paragraph", "text": "During the talk, their IT and operations teams explained how they handle the customer journey, starting from handling calls to using tech for smarter service delivery. They touched on:" },
                        { "type": "list", "items": [
                            "Digital transformation strategies in customer support",
                            "Data privacy and cybersecurity protocols",
                            "Their use of Agile methodology in operations"
                        ]},
                        { "type": "paragraph", "text": "These weren’t just big words — the way they explained it made it clear how important these concepts are in real companies. We also learned that Foundever doesn’t just serve one type of industry — they handle finance, healthcare, retail, and more." },
                        { "type": "paragraph", "text": "One of the highlights was meeting Ms. Zoe Diaz De Rivera, a representative from IBPAP (IT & Business Process Association of the Philippines). She gave a broader view of the IT-BPM industry in the Philippines. She shared that the industry now employs over 1.7 million Filipinos and is still growing, especially because of automation, AI, and robotic process automation (RPA). She also reminded us that tech companies are looking for well-rounded professionals — not just coders, but people who can think critically, communicate clearly, and adapt." },
                        { "type": "image", "src": "d2-6.1.jpg", "width": "30%", "caption": "Ms. Zoe Diaz De Rivera of IBPAP sharing valuable insights." },
                        { "type": "paragraph", "text": "What made me appreciate the visit even more was the environment inside Foundever. We took group photos with the speakers, and one more with Ms. Zoe Diaz herself." },
                        { "type": "gallery", "columns": 2, "images": [ { "src": "d2-2.jpg", "caption": "Our group with the insightful speakers at Foundever." }, { "src": "d2-3.jpg", "caption": "With Ms. Zoe Diaz De Rivera." } ]},
                        { "type": "paragraph", "text": "But out of all the areas we saw, my personal favorite was their cafeteria. I even took a photo of it — it was spacious, modern, and cozy. I could actually picture myself working there, grabbing snacks during break time and chilling a bit with teammates." },
                        { "type": "image", "src": "d2-4.jpg", "width": "30%", "caption": "The modern and cozy cafeteria at Foundever PH." },
                        { "type": "paragraph", "text": "Speaking of snacks — they served us a refresher/snack pack during the orientation, which was a nice touch and made us feel really welcomed." },
                        { "type": "paragraph", "text": "Leaving Foundever, I felt like my standards for a good work environment went up. It’s not just about high-tech systems — it’s also about how a company treats its people and creates a space that encourages growth and comfort." },
                        { "type": "image", "src": "d2-5.jpg", "caption": "Our full group photo at Foundever PH!", "width": "1000px" },
                        { "type": "divider" },
                        { "type": "heading", "text": "Afternoon Dream: Visiting Google Philippines" },
                        { "type": "paragraph", "text": "In the afternoon, we traveled to Bonifacio Global City (BGC), Taguig, for our visit to Google Philippines. When we got there, it felt like I was stepping into a dream. The Google logo inside the building, the clean city vibe of BGC, and even the air felt different — like innovation was just floating around." },
                        { "type": "gallery", "columns": 3, "images": [ { "src": "d2-7.jpg"}, { "src": "d2-8.jpg"}, { "src": "d2-9.jpg"} ]},
                        { "type": "paragraph", "text": "We were welcomed by Atty. Yves Gonzalez, Google PH’s Head of Government Affairs and Public Policy. He was very down-to-earth and passionate about his work, and I appreciated how he didn’t just talk about Google as a company — he talked about its purpose and values." },
                        { "type": "paragraph", "text": "Here’s what I learned during his session:" },
                        { "type": "list", "items": [
                            "Google’s mission is to organize the world’s information and make it universally accessible and useful",
                            "How AI powers products like Google Search, Google Translate, and Google Assistant",
                            "Google’s digital inclusion projects like Be Internet Awesome and Google Station, which help promote online safety and free public Wi-Fi",
                            "The importance of ethical tech — being responsible with data, staying transparent, and protecting users"
                        ]},
                        { "type": "paragraph", "text": "He also shared his career story, from studying law to working with a global tech company. It reminded me that your career path doesn't always have to be straight — what's important is aligning your skills with your purpose." },
                        { "type": "gallery", "columns": 3, "images": [ { "src": "d2-11.jpg"}, { "src": "d2-15.1.jpg"}, { "src": "d2-12.jpg"} ]},
                        { "type": "paragraph", "text": "After the talk, we had a tour of their office, and this part really amazed me. The office had:" },
                        { "type": "list", "items": [
                            "Open working spaces", "Relaxed lounges", "Themed meeting rooms", "A bright and colorful design that reflected creativity and comfort"
                        ]},
                        { "type": "paragraph", "text": "Everything looked like it was made not just for productivity, but also for well-being and collaboration. I now understand why people say Google is one of the best companies to work for — and I totally agree." },
                        { "type": "gallery", "columns": 2, "images": [ { "src": "d2-15.jpg"}, { "src": "d2-15.2.jpg"} ]},
                        { "type": "paragraph", "text": "And of course — they didn’t let us leave hungry! We were treated to some snacks: fries, cookies, coffee, and sandwiches. I even took pictures because it was just too good to forget!" },
                        { "type": "gallery", "columns": 2, "images": [ { "src": "d2-13.jpg"}, { "src": "d2-14.jpg"} ]},
                        { "type": "image", "src": "d2-10.jpg", "caption": "Our group photo at Google Philippines!", "width": "1100px" }
                    ],
                    "conclusion": "If Day 1 was about learning our country’s history, Day 2 was about seeing the future. From Foundever’s structured corporate systems to Google’s innovative and human-centered culture, I realized that there are so many paths we can take as Computer Science students. This day made me feel inspired, motivated, and more focused on what kind of career I want to build."
                }
            },
            
            // DAY 3
            {
                "day": 3, "title": "Culture, Tributes, and Innovation", "date": "June 10, 2025",
                "summary": "Exploring professionalism at Teleperformance, paying respects at the American Cemetery, and diving into innovation at Kollab.",
                "coverImage": "d3-logo.png",
                "coverPosition": "center 5%",
                "content": {
                    "introduction": "By Day 3 of our educational tour, I was already feeling inspired — but this day took it even further. We had a packed schedule, starting with a company visit in the morning, a short historical stop at noon, and another tech company in the afternoon. Every part of the day gave me something new to think about — from professionalism and company culture to history and social impact.",
                    "sections": [
                        { "type": "heading", "text": "Morning Visit: Professionalism at Teleperformance Philippines" },
                        { "type": "paragraph", "text": "Our first stop was at Teleperformance (TP) Philippines, located inside SM Aura Office Tower, BGC. Right away, I noticed how modern and vibrant their office felt — even before stepping in, I took a photo of the TP logo inside the building, and I could tell this was going to be another great experience." },
                        { "type": "image", "src": "d3-1.jpg", "width": "30%", "caption": "Teleperformance logo." },
                        { "type": "paragraph", "text": "Inside, we were led to a conference room where the orientation took place. I honestly felt like a real professional sitting there — with the long table, the formal set-up, and everyone listening quietly to the speaker." },
                        { "type": "image", "src": "d3-2.jpg", "width": "30%", "caption": "Ready for the orientation." },
                        { "type": "paragraph", "text": "I even have a photo of myself in that room, and looking at it, I feel like I’m attending an actual business meeting." },
                        { "type": "image", "src": "d3-4.jpg", "width": "30%", "caption": "Feeling like a professional at the conference table." },
                        { "type": "paragraph", "text": "Our speaker, Ms. Beatrice Grace Bonjibod, Brand Marketing Specialist at TP, gave a very engaging discussion. She introduced Teleperformance as a global leader in digitally integrated business services — not just your typical call center. They use automation, analytics, and innovation to deliver better customer experiences." },
                        { "type": "image", "src": "d3-5.jpg", "width": "30%", "caption": "Ms. Beatrice Grace Bonjibod during her engaging talk." },
                        { "type": "paragraph", "text": "She shared how TP works across different industries and also emphasized something that really stuck with me — their commitment to inclusivity and gender equality. She proudly mentioned that 53% of their workforce are women, which honestly made me smile. It’s great to know that companies are creating empowering environments for women in tech and service industries." },
                        { "type": "paragraph", "text": "Another thing I found interesting was when she talked about soft skills like communication, empathy, collaboration, and adaptability. As a Computer Science student, I sometimes focus too much on coding and tech, so this was a good reminder that these human skills are just as important." },
                        { "type": "paragraph", "text": "After the orientation, we got a tour of TP’s Innovation and Solutions Hub — a space filled with demos and displays showing how technology is used to improve customer service. I took a few photos of the hub — it looked like a mini tech museum, showing real-life use cases of automation and digital tools." },
                        { "type": "gallery", "columns": 3, "images": [ { "src": "d3-6.jpg"}, { "src": "d3-8.jpg"}, { "src": "d3-7.jpg"} ]},
                        { "type": "image", "src": "d3-3.jpg", "caption": "Group photo at Teleperformance Philippines.", "width": "1000px" },
                        { "type": "divider" },
                        { "type": "heading", "text": "Midday Stop: Manila American Cemetery and Memorial" },
                        { "type": "paragraph", "text": "After the Teleperformance visit, we returned to our bus and had our packed lunch provided by DJM Travel & Tours while parked at the Manila American Cemetery in Taguig. Even though it was raining, we still decided to go down, walk around, and explore the area." },
                        { "type": "gallery", "columns": 3, "images": [ { "src": "d3-9.jpg"}, { "src": "d3-12.jpg"}, { "src": "d3-13.jpg"} ]},
                        { "type": "paragraph", "text": "I took a photo of the background — rows and rows of white crosses laid out symmetrically. It was peaceful and humbling. Our tour guide shared a few facts and trivia: this cemetery is the largest of its kind outside the United States, with over 17,000 graves of American and Filipino soldiers who died in World War II." },
                        { "type": "image", "src": "d3-11.jpg", "caption": "The endless rows of white crosses.", "width": "30%" },
                        { "type": "paragraph", "text": "Despite the weather, I wanted to walk around and take in the place. I couldn’t help but reflect on how different kinds of heroes are remembered — whether they’re soldiers who fought for peace or developers who build the future." },
                        { "type": "gallery", "columns": 2, "images": [ { "src": "d3-10.jpg"}, { "src": "d3-14.jpg"} ]},
                        { "type": "divider" },
                        { "type": "heading", "text": "Afternoon Visit: Kollab – Innovation, AI, and Culture" },
                        { "type": "paragraph", "text": "Our last visit for the day was at Kollab, located in Greenfield Tower, Mandaluyong City. When I first stepped in, I was greeted by the smell of coffee — seriously! The place had a coffee shop vibe, and their workspace looked super relaxed. It made sense when I realized their environment is designed for comfort and creativity. There were couches, wide tables, and even workspaces that looked like study areas." },
                        { "type": "image", "src": "d3-15.jpg", "width": "30%", "caption": "Welcome to Kollab!" },
                        { "type": "paragraph", "text": "They welcomed us warmly, and the program began with talks from their team. The first speaker was Mr. Ralph Vincent Regalado, Chief Scientist and Head of AI, who gave us a glimpse of what AI in real life looks like. He explained how they apply it not just in business, but in agriculture, healthcare, and daily services. His message was clear — AI isn’t just code; it’s a tool for change." },
                        { "type": "image", "src": "d3-20.jpg", "width": "30%", "caption": "Mr. Ralph Vincent Regalado on real-world AI." },
                        { "type": "paragraph", "text": "Next was Ms. Jazmine Calma, a Senior QA Engineer, who talked about “Why Culture Matters.” She highlighted how important it is to work in an inclusive and respectful environment. I also noticed the pride flags displayed around the office, which made me realize how LGBTQ-inclusive the company is. That made a strong impression on me — that success and inclusivity can go hand-in-hand." },
                        { "type": "image", "src": "d3-18.jpg", "width": "30%", "caption": "Ms. Jazmine Calma discussing company culture." },
                        { "type": "paragraph", "text": "Then came Sir Toni-Jan Keith Monserrat, Senior Principal Engineer for AI and Data, who gave a very relatable talk on “Applied AI: From Classroom to Real Use Cases.” It really hit home for us students — seeing how what we learn in school can turn into solutions for real-world problems." },
                        { "type": "image", "src": "d3-16.jpg", "width": "30%", "caption": "Sir Toni-Jan Keith Monserrat on Applied AI." },
                        { "type": "paragraph", "text": "The last speaker, Mr. Miguel Siriban, who works on UI/UX design, taught us how to create a portfolio that stands out. His topic, “How to Build a Dev Portfolio That Gets You Hired,” was so helpful. He told us to not just show code, but to show the story behind our work — what problems we solved, how we approached the design, and how we think." },
                        { "type": "image", "src": "d3-21.jpg", "width": "30%", "caption": "Mr. Miguel Siriban sharing portfolio tips." },
                        { "type": "paragraph", "text": "After all the talks, we wrapped up with a panel Q&A where we asked about internships, job interviews, and transitioning from college to the tech world. The speakers were super kind and honest, and I really appreciated their advice." },
                        { "type": "paragraph", "text": "Finally, we took a group photo with the speakers, and though I didn’t get to take a picture of the snacks, I did enjoy them. They served mac and cheese lasagna and puto — and because I was so hungry (and it was so good), I finished mine before I even thought about taking a photo." },
                        { "type": "image", "src": "d3-17.jpg", "width": "30%", "caption": "Snack Time!" },
                        { "type": "image", "src": "d3-19.jpg", "caption": "A final group shot to remember the visit.", "width": "1000px" }
                    ],
                    "conclusion": "Day 3 made me feel like I wasn’t just a student anymore — I was already starting to imagine myself in these workplaces. From the professional energy of Teleperformance, to the quiet reflection at the cemetery, and the creative learning environment of Kollab, I saw so many sides of the world I want to join someday. Every company we visited today didn’t just show us their products — they showed us their values, culture, and purpose. And that’s what inspired me most."
                }
            },
            
            // DAY 4 
            {
                "day": 4, "title": "The Best Day: ADB & MicroSourcing", "date": "June 11, 2025",
                "summary": "An unforgettable visit to the Asian Development Bank and a practical learning session at MicroSourcing.",
                "coverImage": "d4-logo.png",
                "coverPosition": "center 5%",
                "content": {
                    "introduction": "Out of all the company visits during our educational tour, I can proudly say that the Asian Development Bank (ADB) was my absolute favorite. The moment we arrived at their headquarters in Mandaluyong, I already felt the difference. The environment was so professional, global, and welcoming. From that moment, I knew — I wanted to work there someday. ADB is such a big and diverse organization, with employees from all over the world. No wonder it's called the Asian Development Bank.",
                    "sections": [
                        { "type": "paragraph", "text": "When we arrived, we were warmly welcomed by the staff. One of the things that really impressed me was how organized they were—everything was already prepared. We even had customized IDs with our photos printed on them, which they took during registration. (Yes, I have a photo of my ID—it’s now one of my favorite souvenirs from the trip!)" },
                        { "type": "image", "src": "d4-1.jpg", "width": "30%", "caption": "My customized ADB visitor ID." },
                        { "type": "paragraph", "text": "While waiting for the venue to be ready, I took a photo of myself in formal attire at the ADB Main Lobby. I was already fangirling at that point." },
                        { "type": "image", "src": "d4-7.jpg", "width": "30%", "caption": "Fangirling in the ADB Main Lobby." },
                        { "type": "heading", "text": "ADB Tour Begins" },
                        { "type": "paragraph", "text": "Our visit officially started with a guided site tour. Our first stop was the ADB Library and Gallery, and it was just wow. We were accompanied by Mr. Gustavo Castaner Marquardt, who is Spanish and also the Unit Head of the Information Resources and Services, CSD. He was so articulate and inspiring, and I remember thinking to myself, “I want to work with people like him someday.”" },
                        { "type": "gallery", "columns": 3, "images": [ { "src": "d4-4.jpg", "caption": "Mr. Gustavo Castaner Marquardt leading the tour." }, { "src": "d4-5.jpg", "caption": "Mr. Gustavo Castaner Marquardt leading the tour." }, { "src": "d4-2.jpg", "caption": "Mr. Gustavo Castaner Marquardt leading the tour." } ]},
                        { "type": "paragraph", "text": "Next, we moved to the Ground Floor Facility tour, led by Mr. Erwin Casaclang. This part of the tour made my jaw drop. Their cafeteria was so huge and modern—it looked like a fancy hotel restaurant. They also showed us their gymnasium and auditorium. Unfortunately, I didn’t get to take photos of everything because I was just too busy soaking it all in and enjoying every moment. But I do have a photo of their amazing cafeteria and the library!" },
                        { "type": "image", "src": "d4-6.jpg", "width": "30%", "caption": "The impressive ADB cafeteria." },
                        { "type": "heading", "text": "Networking Snacks & Icebreaker Fun" },
                        { "type": "paragraph", "text": "After the tour, we returned to Multifunction Hall 1 where we were treated to the most delicious snacks ever! No exaggeration—sandwiches, cookies, coffee, and their famous crinkles! (They said ADB is known for those crinkles, and now I know why. I could eat 10 of them in one sitting!) I made sure to take a photo of the snacks because they really deserve a spot in my memory." },
                        { "type": "image", "src": "d4-3.jpg", "width": "30%", "caption": "The famous ADB snacks and crinkles!" },
                        { "type": "paragraph", "text": "While enjoying the snacks, we also got the chance to talk with ADB professionals from different countries. Since it’s an international organization, I had to speak English the entire time, but I honestly didn’t mind—it was such an enjoyable and enriching conversation. I really loved that moment." },
                        { "type": "paragraph", "text": "Next, we had a fun icebreaker activity hosted by CXC representatives. Some of the questions they threw at us included:" },
                        { "type": "list", "items": [ "Would you rather be super rich doing a boring job OR live modestly doing what you love?", "Work from home forever OR work in the office with a 3-hour lunch break?", "Be a nobody in a big company or a somebody in a small company?" ]},
                        { "type": "paragraph", "text": "It was fun to see everyone’s answers. We even had to move to different sides of the room based on our choices. Super engaging and lively!" },
                        { "type": "image", "src": "d4-14.2.jpg", "caption": "The fun and lively icebreaker session." },
                        { "type": "heading", "text": "Formal Program Begins: Understanding ADB and CXC" },
                        { "type": "paragraph", "text": "Then came the formal part of the program. ADB gave us an overview of their mission and goals. We learned about their work in financing infrastructure, promoting regional cooperation, and supporting inclusive growth. Honestly, it made me admire them even more because they’re not just a bank—they’re making an impact across Asia and the Pacific. After that, we were introduced to CXC, the global staffing company that partnered with ADB for this event. They shared what they do—like talent sourcing and helping businesses manage their workforce." },
                        { "type": "image", "src": "d4-9.jpg", "width": "30%", "caption": "Mr. Matt Farley discussing about ADB." },
                        { "type": "heading", "text": "Segment 1 with ADB’s IT Department" },
                        { "type": "paragraph", "text": "This was one of my favorite parts of the visit. We had a fireside chat with several key people from ADB’s Infrastructure and Technology Division (ITD). They shared their career journeys, how they use technology in development work, and some really great insights about working in international institutions. The way they talked about IT and its role in development was so eye-opening." },
                        { "type": "list", "items": [ "Peter Fizelle (Advisor, ITD and Head, Cybersecurity & Compliance Unit)", "Michael Tittel (Principal IT Specialist)", "Dennis Anuran (Associate IT Officer)", "Alvin Gatchalian (Principal IT Officer)", "Romena Angeli Hill (IT Specialist)", "Juan Rodrigo Aragon (Senior IT Officer)" ]},
                        { "type": "image", "src": "d4-13.jpg", "caption": "The insightful Fireside Chat with the ITD team." },
                        { "type": "heading", "text": "Segment 2: Roundtable with ADB and Students" },
                        { "type": "paragraph", "text": "I was part of this segment, and I’m super proud of what I shared. The ADB speakers were Sabina Ahmad, Matt Farley, Juness Villa, Alynne Pador, and Emil Cruz." },
                        { "type": "image", "src": "d4-11.jpg", "caption": "Segment 2 with ADB’s IT Department" },
                        { "type": "paragraph", "text": `The question I answered was: <em>"What stereotype of my generation or background would I like to challenge?"</em> And I said (yes, I’m quoting myself here because I’m proud):` },
                        { "type": "quote", "text": "“One stereotype I hear a lot from our generation is that we are too addicted to social media and we're dependent on technology, but we actually use it as a tool to be more connected with the world, be informed, and solve problems in a faster and better way.”" },
                        { "type": "paragraph", "text": "I really loved the opportunity to speak and share my thoughts. It made me feel like my voice mattered."},
                        { "type": "gallery", "columns": 2, "images": [ { "src": "d4-10.jpg", "caption": "Sharing my thoughts." }, { "src": "d4-12.jpg", "caption": "A moment that mattered." } ]},
                        { "type": "image", "src": "d4-14.1.jpg", "caption": "The full panel of speakers from ADB's ITD." },
                        { "type": "paragraph", "text": "After that, one of my classmates presented their project, RePay—a financial lending app that helps people in underserved communities. The ADB professionals were impressed. Right after everything, I was randomly chosen for an interview about our experience at ADB. I was so shocked and nervous but excited at the same time. I spoke from the heart and shared just how much the visit meant to me. (Still waiting to see if that video ever gets posted haha!)" },
                        { "type": "heading", "text": "Group Photos and Goodbyes" },
                        { "type": "paragraph", "text": "The visit wrapped up with a group photo with all ADB professionals, and of course, I had to get a solo photo with Matt Farley, one of the amazing people we got to meet. The networking, insights, and the warm welcome we received made this the most memorable and impactful company visit for me. I could really see myself working in a place like ADB one day. It felt bittersweet because I didn’t want to leave!" },
                        { "type": "gallery", "columns": 2, "images": [ { "src": "d4-14.jpg", "caption": "Group photo with the ADB professionals." }, { "src": "d4-8.jpg", "caption": "A solo photo with Director Matt Farley." } ]},
                        { "type": "image", "src": "d4-14.3.jpg", "caption": "Group photo with the ADB professionals." },
                        { "type": "divider" },
                        { "type": "heading", "text": "MicroSourcing Visit: Our Final Company Stop" },
                        { "type": "paragraph", "text": "After the amazing ADB visit, we went to our last company—MicroSourcing in Quezon City. It was a relaxing afternoon visit. We were welcomed by their staff and given sticker-type IDs. I, of course, took a photo of mine!" },
                        { "type": "image", "src": "d4-15.jpg", "caption": "My MicroSourcing ID.", "width": "300px" },
                        { "type": "gallery", "columns": 2, "images": [ { "src": "d4-16.jpg", "caption": "Inside MicroSourcing's office." }, { "src": "d4-18.jpg", "caption": "The welcoming workspace." } ]},
                        { "type": "paragraph", "text": "Ms. Heidee Enriquez, the CEO, gave us a warm welcome and talked about the importance of digital skills and being open to continuous learning. She was very inspiring. We learned about what MicroSourcing does, their work culture, and how they support Filipino professionals." },
                        { "type": "image", "src": "d4-19.jpg", "width": "30%", "caption": "CEO Heidee Enriquez during her inspiring talk." },
                        { "type": "paragraph", "text": "Then we had a short facility tour. I liked how open and comfortable their workspace was—it had a collaborative vibe. Then came the LinkedIn Workshop where we learned how to build a proper LinkedIn profile, what to post, and how to market ourselves online. That was super helpful since we’re starting to build our professional presence." },
                        { "type": "image", "src": "d4-20.jpg", "width": "30%", "caption": "The very useful LinkedIn Workshop." },
                        { "type": "paragraph", "text": "To end the visit, they gave us snacks (JCo donuts—yum!). We had a group photo with the team and then it was over. A nice chill way to close our educational company visits." },
                        { "type":- "image", "src": "d4-17.jpg", "caption": "Group photo with the MicroSourcing team.", "width": "1000px" }
                    ],
                    "conclusion": "Day 4 was the highlight of the tour for me. ADB truly set a new standard in my head for what kind of environment I want to work in. I was so inspired by how organized, diverse, and forward-thinking the company is. I felt like I belonged there—even if just for a day. Every speaker and staff member made an impact on me. I also loved how inclusive and international the environment was. The snacks, the tour, the conversations—everything just made me fall in love with the idea of working at a global institution someday. MicroSourcing was also a nice final stop—it gave me tips on how to build my online presence and made me think about how I present myself to the professional world. This day was a rollercoaster of emotions—from awe and admiration at ADB to a more grounded and practical learning experience at MicroSourcing. I’ll never forget this day. It made me more excited (and a little less scared) about what’s ahead for me as a future tech professional."
                }
            },
            
            // DAY 5 
             {
                "day": 5, "title": "Chilling in Tagaytay", "date": "June 12, 2025",
                "summary": "A fun and foggy escape from the city to People’s Park in the Sky and Skyranch Tagaytay.",
                "coverImage": "d5-4.jpg",
                "coverPosition": "center 55%",
                "content": {
                    "introduction": "Since it was a holiday, our itinerary for Day 5 was a bit more relaxed and fun-focused. This time, we went out of the city and headed to the cool and breezy city of Tagaytay—and trust me, it was the best way to take a break after all the company visits. Although it was rainy and super cold, that didn’t stop us from enjoying every part of the trip!",
                    "sections": [
                        { "type": "heading", "text": "Morning Exploration: People’s Park in the Sky" },
                        { "type": "paragraph", "text": "We arrived at People’s Park in the Sky in the morning, and the weather welcomed us with a thick fog, chilly wind, and light rain. It was so cold that it felt like we were already in Baguio! Hiking to the top was a fun and bonding experience with my classmates." },
                        { "type": "gallery", "columns": 2, "images": [
                            { "src": "d5-6.jpg", "caption": "People's Park in the Sky." },
                            { "src": "d5-7.jpg", "caption": "Making our way up to the top." }
                        ]},
                        { "type": "paragraph", "text": "Even though we were all shivering and holding onto our jackets, we couldn’t stop taking photos." },
                        { "type": "image", "src": "d5-8.jpg", "width": "30%", "caption": "Shivering but still smiling for the camera." },
                        { "type": "paragraph", "text": "I have a photo of myself at the top, proudly standing with the foggy view of Taal Volcano behind me." },
                        { "type": "gallery", "columns": 2, "images": [
                            { "src": "d5-9.jpg"},
                            { "src": "d5-11.jpg"}
                        ]},
                        { "type": "paragraph", "text": "What made it extra exciting was the mystery that the fog added. It was like walking through a cloud. We even took a group photo up there despite the wind nearly blowing us away." },
                        { "type": "image", "src": "d5-13.jpg", "caption": "A group photo against the wind and fog!" },
                        { "type": "paragraph", "text": "Our tour guide shared some trivia too—like how People’s Park was originally an unfinished mansion commissioned by former President Marcos for a visit by then U.S. President Ronald Reagan, but the visit never happened, and the structure remained incomplete. That made the place feel even more historic." },
                        { "type": "divider" },
                        { "type": "heading", "text": "Afternoon Thrills: Skyranch Tagaytay" },
                        { "type": "paragraph", "text": "In the afternoon, we went to Skyranch Tagaytay for some fun and thrilling rides! Even though the fog was still around and the rain made things slippery, we didn’t let it stop us. I have a photo of me and my friends showing off our wristbands—it was our Skyranch badge of courage." },
                        { "type": "image", "src": "d5-1.jpg", "caption": "Our Skyranch badge of courage!", "width": "20%" },
                        { "type": "paragraph", "text": "We rode the Ferris wheel, and the view from the top was absolutely surreal—Tagaytay was covered in a soft fog blanket, and it felt like we were floating. I took several photos including a shot of the Ferris wheel itself wrapped in fog. It looked like a scene from a fantasy movie." },
                        { "type": "gallery", "columns": 2, "images": [
                            { "src": "d5-4.jpg", "caption": "The Ferris wheel wrapped in a blanket of fog." },
                            { "src": "d5-3.jpg", "caption": "Little Ferris Wheel." }
                        ]},
                        { "type": "image", "src": "d5-5.jpg", "width": "30%", "caption": "The view from the top of the wheel." },
                        { "type": "paragraph", "text": "Now here’s the funny (and terrifying) part: we decided to ride the Vikings, which is one of those giant swinging ship rides. It was a 5-minute ride but felt like a lifetime just watching it. I actually backed out at the very last second because I remembered my fear of heights and my heart condition. And thank goodness I did! Because after the ride, some of my friends were totally traumatized. One of them even said she thought she was gonna fly out! Definitely one of the best decisions I’ve made." },
                        { "type": "paragraph", "text": "After that adrenaline rush, me and my friend went for a chill ride—the horse carousel! It was simple and fun… until I hit my head accidentally (oops), but still worth it. We ended the day by buying snacks and pasalubongs from the stalls around the park." },
                        { "type": "image", "src": "d5-2.jpg", "width": "30%", "caption": "A much calmer ride on the carousel." },
                        { "type": "image", "src": "d5-12.jpg", "caption": "A final group photo to remember our Tagaytay adventure." },
                        { "type": "paragraph", "text": "By early evening, we went back to our dorms to rest and get ready. We had to be up by 1:00 AM for our next adventure—Baguio! So we packed up, recharged, and prepared for the coldest stop of our trip." }
                    ],
                    "conclusion": "This day was such a refreshing and fun break from all the formal company visits. Being surrounded by nature, the foggy views, and the chilly Tagaytay weather made me appreciate the simple joys of travel and bonding with friends. I loved seeing a new place, learning trivia about historical sites like People’s Park, and of course, surviving Skyranch with stories to tell. Even though it was cold and rainy, I wouldn’t trade the experience for anything. It was the kind of day where every small thing—from the fog-covered volcano to the laughter during rides—just made me feel present, happy, and grateful to be part of this journey. Tagaytay, you were cold but awesome!"
                }
            },
            
            // DAY 6 
             {
                "day": 6, "title": "Baguio Chill Adventures", "date": "June 13, 2025",
                "summary": "Our first day in the Summer Capital: strawberries, cadets, and scenic mountain views.",
                "coverImage": "d6-5.jpg",
                "coverPosition": "center 50%",
                "content": {
                    "introduction": "We left our dorm around 1:00 AM and after a long but smooth ride, we finally arrived in Baguio at 5:00 AM! And let me tell you, the moment I stepped out of the coaster, I felt like I was dropped in Korea or Europe in winter—it was so cold! I was literally shivering. Even the water was freezing, and I instantly knew this would be a day to remember.",
                    "sections": [
                        { "type": "heading", "text": "La Trinidad Strawberry Farm" },
                        { "type": "paragraph", "text": "Our first destination was the Strawberry Farm in La Trinidad, Benguet. Unfortunately, we arrived a bit too early and it was still closed. But we didn’t waste any time and took lots of photos instead!" },
                        { "type": "image", "src": "d6-1.jpg", "width": "30%", "caption": "Early morning at the Strawberry Farm." },
                        { "type": "paragraph", "text": "I also got to try a fresh strawberry right after we bought some pasalubongs from the nearby stalls, and wow—it was sweet, juicy, and just so Baguio. One fun moment: I saw this huge sign that looked like the Hollywood sign, but instead, it said \"Valleywood\". That gave me a good laugh—so witty!" },
                        { "type": "image", "src": "d6-2.jpg", "width": "30%", "caption": "Strawberries!" },
                        { "type": "divider" },
                        { "type": "heading", "text": "La Trinidad Views & Bell Church" },
                        { "type": "paragraph", "text": "While on our way to Bell Church, we passed by the famous La Trinidad colorful houses. They looked like an artwork painted across the mountainside. Of course, I took a photo of them because they were so beautiful." },
                        { "type": "image", "src": "d6-3.jpg", "width": "30%", "caption": "The iconic colorful houses of La Trinidad." },
                        { "type": "paragraph", "text": "At Bell Church, we explored the area and took in the peaceful vibe of the place. It had this serene, traditional Chinese architecture and garden spaces." },
                        { "type": "gallery", "columns": 2, "images": [
                            { "src": "d6-4.jpg"},
                            { "src": "d6-5.jpg"}
                        ]},
                        { "type": "paragraph", "text": "Our tour guide mentioned that this place is not just a tourist spot, but also a place of worship and meditation. I took a photo of myself there and another showing the beautiful overhead view of Baguio." },
                        { "type": "gallery", "columns": 3, "images": [
                            { "src": "d6-6.jpg", "caption": "A shot amidst the beauty." },
                            { "src": "d6-8.jpg", "caption": "A stunning overhead view of Baguio." },
                            { "src": "d6-7.jpg", "caption": "Another shot amidst the beauty." }
                        ]},
                        { "type": "paragraph", "text": "We also had a group photo as a keepsake!" },
                        { "type": "image", "src": "d6-9.jpg", "caption": "Our group photo at Bell Church." },
                        { "type": "divider" },
                        { "type": "heading", "text": "Hotel Check-in & Breakfast" },
                        { "type": "paragraph", "text": "After Bell Church, we checked into our hotel. I was honestly so happy to finally rest. We had breakfast (I took a photo of the food!) and then headed to our rooms. I took a picture of our room too because it felt like our little home base in Baguio—simple but comfy and cozy." },
                        { "type": "gallery", "columns": 2, "images": [
                            { "src": "d6-9.1.jpg", "caption": "A well-deserved breakfast." },
                            { "src": "d6-9.2.jpg", "caption": "Our simple and cozy room in Baguio." }
                        ]},
                        { "type": "divider" },
                        { "type": "heading", "text": "Philippine Military Academy (PMA)" },
                        { "type": "paragraph", "text": "In the afternoon, we visited the Philippine Military Academy (PMA)." },
                        { "type": "gallery", "columns": 3, "images": [
                            { "src": "d6-10.jpg" },
                            { "src": "d6-12.jpg" },
                            { "src": "d6-11.jpg" }
                        ]},
                        { "type": "paragraph", "text": "We roamed around the open grounds, admired the tall pine trees, and took photos with Melchor Hall in the background. One of my favorite parts was witnessing the cadets during their formation. It felt so official and powerful. I managed to take a quick snap before we left." },
                        { "type": "gallery", "columns": 2, "images": [
                            { "src": "d6-14.jpg", "caption": "With Melchor Hall in the background." },
                            { "src": "d6-13.jpg", "caption": "Witnessing the cadets in formation." }
                        ]},
                        { "type": "divider" },
                        { "type": "heading", "text": "The Mansion" },
                        { "type": "paragraph", "text": "After PMA, we made a quick stop at The Mansion, the official summer residence of the President of the Philippines. We didn’t go inside, but we took photos outside by the gate, which was grand and beautifully kept." },
                        { "type": "gallery", "columns": 2, "images": [
                            { "src": "d6-15.jpg" },
                            { "src": "d6-17.jpg" }
                        ]},
                        { "type": "image", "src": "d6-16.jpg", "width": "30%", "caption": "Me and my friends at The Mansion!" },
                        { "type": "divider" },
                        { "type": "heading", "text": "Mines View Park: Views, Horses & Doggos" },
                        { "type": "paragraph", "text": "Next up: Mines View Park. This place was bustling with tourists, but it didn’t stop us from having fun." },
                        { "type": "image", "src": "d6-20.jpg", "width": "30%", "caption": "Welcome to Mines View Park!" },
                        { "type": "paragraph", "text": "I saw the view deck, where you could see the lush mountains of Benguet stretching far and wide. There were also pink horses decorated with ribbons and saddles—super eye-catching. I even snapped a photo of the famous Saint Bernard dog there. It was huge and fluffy, like a real-life stuffed animal!" },
                        { "type": "gallery", "columns": 2, "images": [
                            { "src": "d6-18.jpg", "caption": "The famous pink horses." },
                            { "src": "d6-19.jpg", "caption": "A real-life stuffed animal!" }
                        ]},
                        { "type": "image", "src": "d6-21.jpg", "width": "40%", "caption": "Mountain View." },
                        { "type": "paragraph", "text": "I honestly felt a little sad for the horses though. They looked really tired, and I hope they’re being well cared for despite the crowds. Still, the place had that festive and local vibe that made me love it more." },
                        { "type": "divider" },
                        { "type": "heading", "text": "Baguio Night Market" },
                        { "type": "paragraph", "text": "After resting a bit at the hotel, we went to the Baguio Night Market. Sadly, it was so crowded that I didn’t get the chance to buy anything. I really wanted to score some ukay-ukay deals and souvenirs, but it was hard to move around." },
                        { "type": "image", "src": "d6-22.jpg", "width": "30%", "caption": "The crowded Baguio Night Market." }
                    ],
                    "conclusion": "Our Baguio day was definitely cold but golden. From the freezing morning breeze at Strawberry Farm to the iconic sights like PMA and Mines View Park, everything felt like a dream. I loved learning fun facts from our tour guide, especially about how La Trinidad is known for being the country’s strawberry capital, and how the colorful houses were a project to beautify the hillsides. Despite the early morning and some plans not going exactly as expected, I had so much fun exploring and capturing moments that I’ll always treasure. Baguio gave us chills—literally and figuratively!"
                }
            },
            
            // DAY 7 
           {
                "day": 7, "title": "Bumping into Fun: Our Last Baguio Adventures", "date": "June 14, 2025",
                "summary": "Our last adventures in Baguio, from biking in Burnham Park to a final night of fun in Manila.",
                "coverImage": "d7-1.jpg",
                "coverPosition": "center 75%",
                "content": {
                    "introduction": "Our last day in Baguio kicked off with a super fun visit to Burnham Park. The weather was just right—not too cold, not too hot—which made it perfect for biking.",
                    "sections": [
                        { "type": "heading", "text": "Burnham Park Adventures" },
                        { "type": "paragraph", "text": "But we didn’t ride regular bikes... we rode those four-wheeled pedal carts that kind of look like little cars! (I honestly don’t know the exact name but they were super fun!)" },
                        { "type": "image", "src": "d7-2.jpg", "width": "30%", "caption": "The four-wheeled pedal carts were a blast!" },
                        { "type": "paragraph", "text": "We had the best time just going around and laughing with each other. I even accidentally bumped into a couple of kids while driving (oops, sorry haha!)—clearly, I’m not meant to be a racer anytime soon. But still, it was a blast and we took so many photos to remember it by." },
                        { "type": "gallery", "columns": 2, "images": [
                            { "src": "d7-1.jpg", "caption": "Enjoying the ride." },
                            { "src": "d7-3.jpg", "caption": "Me enjoying the ride." }
                        ]},
                        { "type": "divider" },
                        { "type": "heading", "text": "Walking to SM Baguio & More Pasalubong" },
                        { "type": "paragraph", "text": "After our time at Burnham, me and my friends decided to walk all the way to SM City Baguio. Yup—walked! It wasn’t too far and the chilly Baguio breeze made it actually nice. After roaming around SM, we made a quick stop at a pasalubong hub to buy more treats and souvenirs (because let’s be real—there’s always room for more pasalubong)." },
                        { "type": "image", "src": "d7-4.jpg", "width": "30%", "caption": "A quick stop for more pasalubong." },
                        { "type": "divider" },
                        { "type": "heading", "text": "Goodbye Baguio, Hello Manila (Again)" },
                        { "type": "paragraph", "text": "Right after that, it was time to leave our lovely little escape in the mountains and head back to Manila. I felt a little sad because I honestly didn’t want to leave yet—I was just getting used to the cool weather and the relaxed vibe. But all good things must come to an end." },
                        { "type": "divider" },
                        { "type": "heading", "text": "Last Hurrah at SM North Edsa" },
                        { "type": "paragraph", "text": "When we got back to Manila, instead of heading straight to bed, my friends and I made the most out of our last night together. We went to SM North EDSA, and spent some fun time at Timezone playing games, laughing, and taking silly photos. We also did a bit of window shopping, just strolling around the mall and soaking up the last few hours of our trip." },
                        { "type": "gallery", "columns": 2, "images": [
                            { "src": "d7-5.jpg" },
                            { "src": "d7-8.jpg" }
                        ]},
                        { "type": "gallery", "columns": 2, "images": [
                            { "src": "d7-7.jpg" },
                            { "src": "d7-6.jpg" }
                        ]}
                    ],
                    "conclusion": "Our final day was more chill, but that didn’t make it any less special. Burnham Park gave us one last round of laughs and childhood joy. The walk to SM and our bonding at Timezone were simple moments, but they felt so warm and memorable. I realized that beyond all the big places and scenic spots, what really made this trip unforgettable were the little moments of fun with my friends. The last day may have marked the end of our Baguio adventure, but it was also a reminder of how far we’ve come as a group—closer, happier, and with more memories to share. Baguio, you’ve been so good to us. Until next time!"
                }
            },
            
            // DAY 8 
            {
                "day": 8, "title": "Heading Home with a Full Heart", "date": "June 15, 2025",
                "summary": "It’s time to go home—grateful, happy, and filled with unforgettable moments.",
                "coverImage": "d8-5.jpg",
                "coverPosition": "center 55%",
                "content": {
                    "introduction": "Our last day of the entire educational tour was here. I woke up feeling a mix of excitement and a little sadness, knowing it was time to say goodbye to everything we had experienced.",
                    "sections": [
                        { "type": "image", "src": "d8-1.jpg", "width": "30%", "caption": "That bittersweet feeling on the last day." },
                        { "type": "heading", "text": "Final Goodbyes" },
                        { "type": "paragraph", "text": "Before packing everything up, I took a photo of my baggage inside our dorm room—just a little memory of our home for the past days." },
                        { "type": "image", "src": "d8-2.jpg", "width": "30%", "caption": "Packed and ready to go, with a heavy heart." },
                        { "type": "paragraph", "text": "After breakfast, we all gathered our things and boarded the DJM bus for the very last time." },
                        { "type": "image", "src": "d8-3.jpg", "width": "30%", "caption": "Boarding the bus one last time." },
                        { "type": "paragraph", "text": "I made sure to take a photo of the bus as we were being dropped off at the airport—that bus and the coaster brought us to so many amazing places and I just had to capture that memory." },
                        { "type": "gallery", "columns": 2, "images": [
                            { "src": "d8-4.jpg"},
                            { "src": "d8-5.jpg"}
                        ]},
                        { "type": "divider" },
                        { "type": "heading", "text": "Thank You, DJM!" },
                        { "type": "paragraph", "text": "This tour wouldn't have been this smooth and unforgettable without the awesome team from DJM. From the drivers who always kept us safe on the road, to the people who prepared our meals and snacks (always on time and delicious!), to our tour guides who made every destination more meaningful." },
                        { "type": "paragraph", "text": "Special shoutout to Ate Melai, our tour guide on Day 1, for starting the trip off with good energy and fun facts! And of course, Kuya Enan, who guided us all throughout the rest of the tour—thank you for being so informative, patient, and super accommodating!" },
                        { "type": "divider" },
                        { "type": "heading", "text": "Thank You, CCS Professors!" },
                        { "type": "paragraph", "text": "I also want to thank our CCS professors — Engr. Marjorie Rojas, Asso. Prof. Salimar Tahil, Mr. Rhamirl Jaafar, and Mr. John Lloyd Edios — for guiding us throughout this tour. Your support, encouragement, and advice made this journey smoother and more meaningful. We truly appreciate the time and effort you put into making this educational tour a memorable and valuable experience for all of us." },
                    ],
                    "conclusion": "This entire tour was more than just an academic requirement—it was a beautiful adventure full of learning, fun, and memories. From visiting amazing tech companies to experiencing the culture, weather, and food of Tagaytay and Baguio—every single day gave me something to remember. I’m incredibly grateful for this opportunity. This tour brought me closer to my classmates and opened my eyes to new possibilities for my future. I’ll always look back at this trip with a big smile on my face."
                }
            }
        ]
    };

    // --- DOM Elements ---
    const blogTitleEl = document.getElementById('blog-title');
    const blogSubtitleEl = document.getElementById('blog-subtitle');
    const timelineContainer = document.getElementById('timeline-container');
    const modal = document.getElementById('modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navBar = document.querySelector('.navbar');

    // --- Functions ---
    function renderHeader() { 
        const blogHeroHeader = document.querySelector('.blog-hero-header');
        blogTitleEl.textContent = blogData.title; 
        blogSubtitleEl.textContent = blogData.subtitle; 
        if (blogData.hero) {
            blogHeroHeader.style.backgroundImage = `url('${blogData.hero.image}')`;
            blogHeroHeader.style.backgroundPosition = blogData.hero.position || 'center';
        }
    }

    function renderDayCards() {
        timelineContainer.innerHTML = '';
        blogData.days.forEach((day, index) => {
            const card = document.createElement('div');
            if (index === 0 || index === 4 || index === 7) { card.className = 'day-card span-full'; } 
            else if (index >= 1 && index <= 3) { card.className = 'day-card span-third'; } 
            else if (index >= 5 && index <= 6) { card.className = 'day-card span-half'; }
            card.dataset.dayIndex = index;
            const coverImgStyle = `background-image: url('${day.coverImage}'); ${day.coverPosition ? `background-position: ${day.coverPosition};` : ''}`;
            card.innerHTML = `
                <div class="card-image" style="${coverImgStyle}"></div>
                <div class="card-content">
                    <p class="day-card-number">Day ${day.day} • ${day.date}</p>
                    <h3 class="day-card-title">${day.title}</h3>
                    <p class="day-card-summary">${day.summary}</p>
                    <a href="#" class="read-more-btn">Read More →</a>
                </div>`;
            timelineContainer.appendChild(card);
        });
    }

    function buildModalContent(dayData) {
        let contentHtml = `<h2>${dayData.title}</h2><p class="date">${dayData.date}</p>`;
        if (dayData.content.introduction) { contentHtml += `<p>${dayData.content.introduction}</p>`; }
        if (dayData.content.sections) {
            dayData.content.sections.forEach(section => {
                let sectionHtml = '';
                switch (section.type) {
                    case 'heading': sectionHtml = `<h3>${section.text}</h3>`; break;
                    case 'paragraph': sectionHtml = `<p>${section.text}</p>`; break;
                    case 'list': sectionHtml = `<ul>${section.items.map(item => `<li>${item}</li>`).join('')}</ul>`; break;
                    case 'image':
                        const style = section.width ? `style="max-width: ${section.width};"` : '';
                        sectionHtml = `<div class="modal-image-container" ${style}><img src="${section.src}" alt="${section.caption}"><span class="caption">${section.caption}</span></div>`;
                        break;
                    case 'gallery':
                        const galleryClasses = ['modal-gallery'];
                        if (section.columns) { galleryClasses.push(`gallery-${section.columns}-col`); } 
                        else { galleryClasses.push('gallery-auto'); }
                        sectionHtml = `<div class="${galleryClasses.join(' ')}">${section.images.map(img => `<div class="modal-gallery-item"><img src="${img.src}" alt="${img.caption}" title="${img.caption}"></div>`).join('')}</div>`;
                        break;
                    case 'divider': sectionHtml = `<hr class="section-divider">`; break;
                    case 'quote': sectionHtml = `<blockquote>${section.text}</blockquote>`; break;
                }
                contentHtml += sectionHtml;
            });
        }
        if (dayData.content.conclusion) { contentHtml += `<p class="conclusion">${dayData.content.conclusion}</p>`; }
        return contentHtml;
    }

    function openModal(dayIndex) {
        modalBody.innerHTML = buildModalContent(blogData.days[dayIndex]);
        modal.classList.add('is-visible');
        document.body.classList.add('modal-open');
        modalBody.scrollTop = 0;
    }

    function closeModal() {
        modal.classList.remove('is-visible');
        document.body.classList.remove('modal-open');
    }

    // --- Event Listeners ---
    hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); navLinks.classList.toggle('active'); });
    timelineContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.day-card');
        if (card) { e.preventDefault(); openModal(card.dataset.dayIndex); }
    });
    navLinks.addEventListener('click', e => {
        const targetLink = e.target.closest('a');
        if (!targetLink) return;
        const href = targetLink.getAttribute('href');
        e.preventDefault();
        if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); } 
        else if (href.startsWith('#')) {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const navHeight = navBar.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
        if (window.innerWidth <= 768) { hamburger.classList.remove('active'); navLinks.classList.remove('active'); }
    });
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('is-visible')) closeModal(); });

    // --- Initialization ---
    renderHeader();
    renderDayCards();
});