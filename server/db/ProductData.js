const products = [
	{
		title: "Harry Potter and the Sorcerer's Stone",
		author: 'J.K. Rowling',
		publishedDate: '1997-06-26',
		genre: 'Fiction',
		description:
			'The first book in the Harry Potter series, which follows the story of a young boy who discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry.',
		imageUrl: 'https://m.media-amazon.com/images/I/51Ppi-8kISL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'Harry Potter and the Chamber of Secrets',
		author: 'J.K. Rowling',
		publishedDate: '1998-07-02',
		genre: 'Fiction',
		description:
			'The second book in the Harry Potter series, which follows Harry Potter as he investigates a mysterious chamber in Hogwarts School of Witchcraft and Wizardry.',
		imageUrl: 'https://m.media-amazon.com/images/I/510CXXt9CqL.jpg',
		price: 15.99,
	},
	{
		title: 'Harry Potter and the Prisoner of Azkaban',
		author: 'J.K. Rowling',
		publishedDate: '1999-07-08',
		genre: 'Fiction',
		description:
			"The third book in the Harry Potter series, which follows Harry Potter as he attempts to clear the name of his godfather Sirius Black and learns about the truth of his parents' deaths.",
		imageUrl: 'https://m.media-amazon.com/images/I/51vbhfNA0+L._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'Harry Potter and the Goblet of Fire',
		author: 'J.K. Rowling',
		publishedDate: '2000-07-08',
		genre: 'Fiction',
		description:
			'The fourth book in the Harry Potter series, which follows Harry Potter as he participates in the Triwizard Tournament and confronts the return of the dark wizard Voldemort.',
		imageUrl: 'https://m.media-amazon.com/images/I/513TQ4ihqqL.jpg',
		price: 15.99,
	},
	{
		title: 'Harry Potter and the Order of Phoenix',
		author: 'J.K. Rowling',
		publishedDate: '2003-06-21',
		genre: 'Fiction',
		description:
			'The fifth book in the Harry Potter series, which follows Harry Potter as he forms a secret group of students to oppose the Ministry of Magic and the return of the dark wizard Voldemort.',
		imageUrl: 'https://m.media-amazon.com/images/I/519jC3ZUisL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'Harry Potter and the Half-Blood Prince',
		author: 'J.K. Rowling',
		publishedDate: '2005-07-16',
		genre: 'Fiction',
		description:
			'The sixth book in the Harry Potter series, which follows Harry Potter as he learns about the past of the dark wizard Voldemort and the truth of his own destiny.',
		imageUrl: 'https://m.media-amazon.com/images/I/512xFZRDM3L.jpg',
		price: 15.99,
	},
	{
		title: 'Harry Potter and the Deathly Hallows',
		author: 'J.K. Rowling',
		publishedDate: '2007-07-21',
		genre: 'Fiction',
		description:
			'The seventh and final book in the Harry Potter series, which follows Harry Potter as he seeks to destroy the remaining Horcruxes and confronts the dark wizard Voldemort in a final showdown.',
		imageUrl: 'https://m.media-amazon.com/images/I/51V6zvaRjkL.jpg',
		price: 15.99,
	},
	{
		title: 'To Kill a Mockingbird',
		author: 'Harper Lee',
		publishedDate: '1960-07-11',
		genre: 'Fiction',
		description:
			'The story of a young girl in a Southern town and the crisis of conscience that rocked it.',
		imageUrl:
			'https://m.media-amazon.com/images/I/51tDHl8Z7cL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
		price: 15.99,
	},
	{
		title: '1984',
		author: 'George Orwell',
		publishedDate: '1949-06-08',
		genre: 'Fiction',
		description:
			'A dystopian novel set in a world of perpetual war, omnipresent government surveillance, and public manipulation.',
		imageUrl: 'https://m.media-amazon.com/images/I/41gJDBO6xWL.jpg',
		price: 15.99,
	},
	{
		title: 'Animal Farm',
		author: 'George Orwell',
		publishedDate: '1945-08-17',
		genre: 'Fiction',
		description:
			'A political fable that tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy.',
		imageUrl: 'https://m.media-amazon.com/images/I/41pXW28sBgL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'The Catcher in the Rye',
		author: 'J.D. Salinger',
		publishedDate: '1951-07-16',
		genre: 'Fiction',
		description:
			'A novel that tells the story of Holden Caulfield, a young man who has been expelled from prep school and wanders around New York City trying to find his place in the world.',
		imageUrl: 'https://m.media-amazon.com/images/I/51NtELEqgzS._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'Pride and Prejudice',
		author: 'Jane Austen',
		publishedDate: '1813-01-28',
		genre: 'Fiction',
		description:
			'A novel that follows the story of Elizabeth Bennet, a strong-willed young woman, and her relationship with Mr. Darcy, a wealthy and proud man.',
		imageUrl: 'https://m.media-amazon.com/images/I/51CMZRvH1HL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		publishedDate: '1925-04-10',
		genre: 'Fiction',
		description:
			'A novel set in the Jazz Age of the 1920s, that follows the story of the wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
		imageUrl: 'https://m.media-amazon.com/images/I/41xn50Az+SL.jpg',
		price: 15.99,
	},
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		publishedDate: '1937-09-21',
		genre: 'Fiction',
		description:
			'A novel that follows the story of Bilbo Baggins, a hobbit who is recruited by the wizard Gandalf to help a group of dwarves reclaim their mountain home from a dragon.',
		imageUrl: 'https://m.media-amazon.com/images/I/61Ng-W9EhBL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'The 7 Habits of Highly Effective People',
		author: 'Stephen R. Covey',
		publishedDate: '1989-08-15',
		genre: 'Nonfiction',
		description:
			'A self-help book that presents seven habits that can lead to personal and professional success.',
		imageUrl: 'https://m.media-amazon.com/images/I/51hXKD+YaUL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
		author: 'Susan Cain',
		publishedDate: '2012-01-24',
		genre: 'Nonfiction',
		description:
			'An exploration of introversion and its positive qualities in a culture that often values extroverted traits.',
		imageUrl: 'https://m.media-amazon.com/images/I/41mb5BNuG0L.jpg',
		price: 15.99,
	},
	{
		title: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup',
		author: 'John Carreyrou',
		publishedDate: '2018-05-21',
		genre: 'Nonfiction',
		description:
			'A journalistic account of the rise and fall of the biotech startup Theranos and its founder Elizabeth Holmes.',
		imageUrl: 'https://m.media-amazon.com/images/I/411nKCqhwJL.jpg',
		price: 15.99,
	},
	{
		title: 'The Power of Now',
		author: 'Eckhart Tolle',
		publishedDate: '1999-08-19',
		genre: 'Nonfiction',
		description:
			'A guide to spiritual enlightenment, emphasizing the importance of living in the present moment.',
		imageUrl: 'https://m.media-amazon.com/images/I/4108V6JJ+jL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'Atlas Shrugged',
		author: 'Ayn Rand',
		publishedDate: '1957-10-10',
		genre: 'Fiction',
		description:
			'A novel about a group of industrialists who go on strike against a society that wants to exploit their talents.',
		imageUrl: 'https://m.media-amazon.com/images/I/51-Obg7xgmL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'Jurassic Park',
		author: 'Michael Crichton',
		publishedDate: '1990-11-20',
		genre: 'Fiction',
		description:
			'A novel about a theme park featuring genetically engineered dinosaurs, and the disastrous events that unfold when the creatures escape.',
		imageUrl: 'https://m.media-amazon.com/images/I/51Sh8gB0bfL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'The Lost World',
		author: 'Michael Crichton',
		publishedDate: '1995-09-01',
		genre: 'Fiction',
		description:
			'A novel about an expedition to a remote island off the coast of Costa Rica where dinosaurs still roam free.',
		imageUrl: 'https://m.media-amazon.com/images/I/41rax7EfStL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'Greenlights',
		author: 'Matthew McConaughey',
		publishedDate: '2020-10-20',
		genre: 'Nonfiction',
		description:
			'A memoir by actor Matthew McConaughey, reflecting on his life and career and offering insights on how to find happiness and fulfillment.',
		imageUrl: 'https://m.media-amazon.com/images/I/41JMH+5JNCL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'The Toilet Paper Entrepreneur',
		author: 'Mike Michalowicz',
		publishedDate: '2008-09-18',
		genre: 'Nonfiction',
		description:
			'A guide for entrepreneurs on how to start and grow a successful business, with a focus on creativity, resourcefulness, and frugality.',
		imageUrl: 'https://m.media-amazon.com/images/I/51vD-bI8O2L._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'Fear and Loathing in Las Vegas',
		author: 'Hunter S. Thompson',
		publishedDate: '1971-11-17',
		genre: 'Nonfiction',
		description:
			'A work of "gonzo" journalism that details the author\'s drug-fueled trip to Las Vegas to cover a motorcycle race.',
		imageUrl: 'https://m.media-amazon.com/images/I/51faLlm1iVL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'Getting Things Done: The Art of Stress-Free Productivity',
		author: 'David Allen',
		publishedDate: '2001-01-03',
		genre: 'Nonfiction',
		description:
			'A guide to increasing productivity and reducing stress by organizing tasks and setting priorities.',
		imageUrl: 'https://m.media-amazon.com/images/I/51vQKr4lnGL._SY346_.jpg',
	},
	{
		title:
			'Strong Fathers, Strong Daughters: 10 Secrets Every Father Should Know',
		author: 'Meg Meeker',
		publishedDate: '2006-03-01',
		genre: 'Nonfiction',
		description:
			'A guide for fathers on how to raise confident and capable daughters, with advice on topics such as sex, drugs, and self-esteem.',
		imageUrl: 'https://m.media-amazon.com/images/I/41xH5LY35FL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'The Four Agreements: A Practical Guide to Personal Freedom',
		author: 'Don Miguel Ruiz',
		publishedDate: '1997-11-07',
		genre: 'Nonfiction',
		description:
			"A guide to personal freedom based on four principles: be impeccable with your word, don't take anything personally, don't make assumptions, and always do your best.",
		imageUrl: 'https://m.media-amazon.com/images/I/51pnYmWFKwL.jpg',
		price: 15.99,
	},
	{
		title: 'The Lightning Thief',
		author: 'Rick Riordan',
		publishedDate: '2005-06-28',
		genre: 'Fiction',
		description:
			'Percy Jackson discovers he is a demigod, the son of Poseidon, and sets out on a quest to prevent a war between the Greek gods.',
		imageUrl: 'https://m.media-amazon.com/images/I/51L4QD5L2vL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'The Sea of Monsters',
		author: 'Rick Riordan',
		publishedDate: '2006-04-01',
		genre: 'Fiction',
		description:
			'Percy Jackson and his friends must retrieve the Golden Fleece from the Sea of Monsters to save the magical borders of Camp Half-Blood.',
		imageUrl: 'https://m.media-amazon.com/images/I/510uVlyNCvL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: "The Titan's Curse",
		author: 'Rick Riordan',
		publishedDate: '2007-05-01',
		genre: 'Fiction',
		description:
			'Percy Jackson and his friends embark on a quest to save Annabeth and the goddess Artemis, who have been captured by the powerful Titan lord Atlas.',
		imageUrl: 'https://m.media-amazon.com/images/I/51g4gvXUDRL._SY346_.jpg',
		price: 15.99,
	},
	{
		title: 'The Battle of the Labyrinth',
		author: 'Rick Riordan',
		publishedDate: '2008-05-06',
		genre: 'Fiction',
		description:
			'Percy Jackson and his friends journey through the Labyrinth in search of Daedalus and the secret to stopping the evil Titan lord Kronos.',
		imageUrl: 'https://m.media-amazon.com/images/I/51Bmr5DNstL.jpg',
		price: 15.99,
	},
	{
		title: 'The Last Olympian',
		author: 'Rick Riordan',
		publishedDate: '2009-05-05',
		genre: 'Fiction',
		description:
			'Percy Jackson and his friends prepare for the final battle against the Titans and Kronos, and Percy must make a difficult choice that could save or destroy Olympus.',
		imageUrl: 'https://m.media-amazon.com/images/I/511Bgr959LL.jpg',
		price: 15.99,
	},
	{
		title: 'Hatchet',
		author: 'Gary Paulsen',
		publishedDate: '1987-11-30',
		genre: 'Fiction',
		description:
			'A novel about a thirteen-year-old boy named Brian Robeson who is stranded in the Canadian wilderness after a plane crash and must survive with only a hatchet.',
		imageUrl: 'https://m.media-amazon.com/images/I/61ojqdijykL._SY346_.jpg',
		price: 15.99,
	},
];

module.exports = products;
