const mongoose = require('mongoose');

const MessagesSchema = mongoose.Schema(
	{
		text: {
			type: String,
		},
		attachment: [
			{
				type: String,
			},
		],
		sender: {
			id: mongoose.Types.ObjectId,
			name: String,
			avatar: String,
		},
		receiver: {
			id: mongoose.Types.ObjectId,
			name: String,
			avatar: String,
		},
		date_time: {
			type: Date,
			default: Date.now(),
		},
		conversation_id: {
			type: mongoose.Types.ObjectId,
			require: true,
		},
	},
	{ timestamps: true }
);

const Message = mongoose.model('Message', MessagesSchema);

module.exports = Message;
