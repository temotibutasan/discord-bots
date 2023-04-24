const { SlashCommandBuilder,ActionRowBuilder, ModalBuilder,TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        // コマンドの名前
		.setName('ping')
        // コマンドの説明文
		.setDescription('Pong!と返信。'),
	async execute(interaction) {
		await showModal(interaction);
        // Pong!と返信
		await interaction.reply('Pong!');
	},
};

async function showModal(interaction)
{
	// Add components to modal
	const modal = new ModalBuilder().setCustomId('mymodal').setTitle('My Modal');
	// Create the text input components
	const favoriteColorInput = new TextInputBuilder()
		.setCustomId('favoriteColorInput')
		// The label is the prompt the user sees for this input
		.setLabel("What's your favorite color?")
		// Short means only a single line of text
		.setStyle(TextInputStyle.Short);

	const hobbiesInput = new TextInputBuilder()
		.setCustomId('hobbiesInput')
		.setLabel("What's some of your favorite hobbies?")
		// Paragraph means multiple lines of text.
		.setStyle(TextInputStyle.Paragraph);

	// An action row only holds one text input,
	// so you need one action row per text input.
	const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
	const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

	// Add inputs to the modal
	modal.addComponents(firstActionRow, secondActionRow);

	// Show the modal to the user
	await interaction.showModal(modal);
}