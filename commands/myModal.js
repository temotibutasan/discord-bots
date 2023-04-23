const { SlashCommandBuilder,ActionRowBuilder, ModalBuilder,TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        // コマンドの名前
		.setName('myModal')
        // コマンドの説明文
		.setDescription('myModal情報確認'),
	async execute(interaction) {
		// Get the data entered by the user
		const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
		const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
		await interaction.reply(`favoriteColor: ${favoriteColor}\n hobbies:${hobbies}`);
	},
};