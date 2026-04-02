/**
 * journals-data.js — Source of truth for all Journals of Echo entries.
 *
 * This is the ONLY file to edit when adding or changing journal entries.
 * Story body text lives in separate .md files under stories/ and is referenced
 * via the `file` field — it is NOT embedded here.
 *
 * Fields:
 *   id                  — unique kebab-case slug
 *   number              — display string, e.g. '001' (rendered as #001)
 *   title               — display title
 *   date                — in-universe date string
 *   location            — in-universe location string
 *   centralQuote        — pull-quote shown prominently in detail view + as card snippet
 *   centralQuoteSpeaker — attribution for the central quote
 *   glowColor           — CSS hex color for the pulsing glow effect
 *   file                — root-relative path to the story's .md file
 */

const JOURNALS = [
  {
    id: 'journal-001',
    number: '001',
    title: 'The Faceless One Marches',
    date: 'Ancient Star 5th, 1346 AE',
    location: 'Cindros - City Walls',
    centralQuote: 'It\'s a special kind of solemn melancholy when you fully realize the cost of war. A pressure behind your eyes that makes you want to weep an ocean. But instead you only have enough time to brace yourself for the next horror.',
    centralQuoteSpeaker: 'Alduin Silvermist',
    glowColor: '#283ead',
    file: 'stories/journal-001.md',
  },
  {
    id: 'journal-002',
    number: '002',
    title: 'Black and Gold',
    date: 'Cold Star 33rd, 1346 AE',
    location: 'Willowpath',
    centralQuote: 'Lio, you have to always remember, that it is the steady-hand of the commonfolk that acts as the lifeblood of everything we do. If you are ever dictating legislation without their spirit being at the forefront of your mind, then you are ignoring the fundamentals of our fellow countrymen.',
    centralQuoteSpeaker: 'King Galio the 14th',
    glowColor: '#a5a503',
    file: 'stories/journal-002.md',
  },
];