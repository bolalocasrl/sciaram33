import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'evento',
  title: 'Evento',
  type: 'document',
  fields: [
    defineField({
      name: 'titolo',
      title: 'Titolo evento',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'data',
      title: 'Data evento',
      type: 'date',
      options: { dateFormat: 'DD/MM/YYYY' },
    }),
    defineField({
      name: 'descrizione',
      title: 'Descrizione',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'immagine',
      title: 'Foto evento',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'attivo',
      title: 'Visibile sul sito',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
