const conn = require('../conn');
const { STRING, TEXT, UUID, UUIDV4, ENUM, DATEONLY, literal } = conn.Sequelize;

const Review = conn.define('review', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
	title: {
		type: STRING,
		allowNull: false,
	},
	content: {
		type: TEXT,
		allowNull: true,
	},
	rating: {
		type: ENUM('1', '2', '3', '4', '5'),
		allownull: false,
	},
	userId: {
		type: UUID,
		allowNull: false,
	},
	productId: {
		type: UUID,
		allowNull: false,
	},
	date: {
		type: DATEONLY,
		allowNull: false,
		defaultValue: literal('CURRENT_DATE'),
	},
	status: {
		type: ENUM('APPROVED', 'PENDING', 'DENIED'),
		allowNull: true,
		defaultValue: 'APPROVED',
	},
});

module.exports = Review;
