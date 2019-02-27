import capitalize from 'capitalize'
import orderBy from 'lodash/orderBy';
import formatDate from 'date-fns/format'

import { homework } from '../../data/homework.json'
// styles
const config = {
  styles: {
    title: {
      fontSize: 24,
      bold: true,
      alignment: 'center',
      color: '#b57628',
      margin: [0, 0, 0, 20]
    },
    subtitle: {
      fontSize: 18,
      color: '#b57628',
      margin: [0, 0, 0, 15]
    },
    body: {
      fontSize: 9,
      margin: [0, 0, 0, 5]
    },
    bottom:{
            fontSize: 9,
            margin:[0,350,0,0]
    },
    list: {
      margin: [0, 5, 0, 20]
    },
    subitem: {
      margin: [0, 5, 0, 10]
    },
    group: {
      margin: [0, 0, 0, 20]
    },
    table: {
      margin: [0, 20, 0, 0]
    }
  }
}


export const createPdf = ({ fruits, trunks }, motive) => {
  const ordered = {
    fruits: orderBy(fruits, [f => f.title.toLowerCase()], ['asc']),
    trunks: orderBy(trunks, [t => t.title.toLowerCase()], ['asc'])
  }
const bibleVerses = homework[motive].additional.replace(/,/g, '\r\n');
  const definition = {
    content: [
      { text: 'FRUIT TO ROOT', style: 'title' },
      { text: 'Report date:', style: 'body', bold: true },
      {
        text: [
          { text: formatDate(new Date(), 'DD MMMM YYYY'), style: 'body' }
        ],
        style: 'group'
      },
      { text: 'Completed on behalf of:', style: 'body', bold: true },
      {
        text: [
          { text: '_____________________________________________________', style: 'body' }
        ],
        style: 'group'
      },
      { text: 'Completed by:', style: 'body', bold: true },
      {
        text: [
          { text: '_____________________________________________________', style: 'body' }
        ],
        style: 'group'
      },
      {
        table: {
          widths: ['*', '*', '*'],
          body: [
            [
              { text: 'Fruit Selected', style: 'body', bold: true },
              { text: 'Thoughts Selected', style: 'body', bold: true },
              { text: 'Heart Suggested', style: 'body', bold: true }
            ],
            [
              { ul: ordered.fruits.map((f) => ({ text: f.title, style: 'body' })) },
              { ul: ordered.trunks.map((t) => ({ text: t.title, style: 'body' })) },
              { text: capitalize(motive), style: 'body', textTransform: 'capitalize' }
            ]
          ]
        },
        style: 'table',
      },
     {text:'Note to leaders: This report should be used to help you provide counsel to the people in your care. It is designed to help you with the framework and discernment to lead your people to a conclusion regarding the state of their heart. It is NOT designed to provide the conclusion. This shouldn’t be given directly to the person in need, but rather used as the foundation for a great conversation with them.',style:'bottom', pageBreak:'after'},




// {text:'Examine yourself in light of Gods Word (Psalm 139:23-24, Proverbs 28:13, 1 Peter 5:6-7)' , style: 'body'},
// {text:'See your sinfulness, humble yourself, confess and forsake your sin (James 5:16; Proverbs 28:13).', style: 'body'},
// {text:'Ask yourself what a biblical response to your problem should look like.', style: 'body'},
// {text:'Step 2: Trust God – He has the answers in His Word.', style: 'body'},
// {text:'Goal: For Scripture to increase confidence in God as you trust Him for help and hope. ', style: 'body'},
// {text:' Read through specific passages of Scripture.', style: 'body'},
// {text:' Underline key words or phrases that illustrate or point out: ', style: 'body'},
// {text:' Indicatives – What is God saying to me about who I am in my position in Christ?', style: 'body'}, 
// {text:' Imperatives – What is God asking me to do in the power of Christ? ', style: 'body'}

      {text:"Heart-Revealing Questions:", style:'title'},
      { 
        text: [
          '1. ',
          { text: 'What was the situation', bold: true },
        ],
        style: 'body'
      },
      {
        ul: [
          {
            text: '__________________________________________________________________________________________________________',
            style: 'body'
          },
          {
            text: '__________________________________________________________________________________________________________',
            style: 'body'
          }
        ],
        style: 'list'
      },
     {
        text: [
          '2. ',
          { text: 'How did you respond?', bold: true },
        ],
        style: 'body'
      },
      {
        ul: [
          {
            text: '__________________________________________________________________________________________________________',
            style: 'body'
          },
          {
            text: '__________________________________________________________________________________________________________',
            style: 'body'
          }
        ],
        style: 'list'
      },
      {
        text: [
          '3. ',
          { text: 'What were you thinking/feeling?', bold: true },
        ],
        style: 'body'
      },
      {
        ul: [
          {
            text: '__________________________________________________________________________________________________________',
            style: 'body'
          },
          {
            text: '__________________________________________________________________________________________________________',
            style: 'body'
          }
        ],
        style: 'list'
      },
      {
        text: [
          '4. ',
          { text: 'What did you want in that moment?', bold: true },
        ],
        style: 'body'
      },
      {
        ul: [
          {
            text: '__________________________________________________________________________________________________________',
            style: 'body'
          },
          {
            text: '__________________________________________________________________________________________________________',
            style: 'body'
          }
        ],
        style: 'list'
      },
      {
        text: [
          '5. ',
          { text: 'What would God say about your response?', bold: true },
        ],
        style: 'body'
      },
      {
        ul: [
          {
            text: '__________________________________________________________________________________________________________',
            style: 'body'
          },
          {
            text: '__________________________________________________________________________________________________________',
            style: 'body'
          }
        ],
        style: 'list'
      },
      {
        text: [
          '6. ',
          { text: 'What would God want you to do differently?', bold: true },
        ],
        style: 'body'
      },
      {
        ul: [
          {
            text: '__________________________________________________________________________________________________________',
            style: 'body'
          },
          {
            text: '__________________________________________________________________________________________________________',
            style: 'body'
          }
        ],
        style: 'list',
        pageBreak: 'after'
      },
      {text:capitalize(motive), style: 'subtitle'},
      {text: bibleVerses,
        pageBreak: 'after'},

      { text: 'HOMEWORK ASSIGNMENTS:', style: 'title' },
      { text: capitalize(motive), style: 'subtitle' },
      {
        text: [
          '1. ',
          { text: 'Go to God: ', bold: true },
          homework[motive].thought
        ],
        style: 'body'      },
      {
        ul: [
          {
            text: '_____________________________________________________',
            style: 'body'
          },
          {
            text: '_____________________________________________________',
            style: 'body'
          },
          {
            text: '_____________________________________________________',
            style: 'body'
          }
        ],
        style: 'list'
      },
      {
        text: [
          '2. ',
          { text: 'Trust God: ', bold: true },
          'Read through the passage below which addresses the issue of anger. Use the following approach: '
        ],
        style: 'body'
      },
      {
        ul: [
          {
            text: 'Read through specific passages of Scripture',
            style: 'body'
          },
          {
            text:
              'Underline key words or phrases that illustrate or point out:',
            style: 'body'
          },
          {
            ul: [
              {
                text:
                  'Indicatives – What is God saying to me about who I am in my position in Christ?',
                style: 'body'
              },
              {
                text:
                  'Imperatives – What is God asking me to do in the power of Christ?',
                style: 'body'
              }
            ]
          },
          {
            text:
              'Record thoughts and feelings about God’s empowerment and our responsibility',
            style: 'body'
          }
        ],
        style: 'list'
      },
      {
        text: ['Main Passage', homework[motive].passage],
        style: 'body'
      },
      {
        text: [
          {
            text: [
              {
                text: 'Additional Scriptures: ',
                style: 'body'
              },
              {
                text: homework[motive].additional,
                style: 'body'
              }
            ]
          }
        ],
        style: 'group'
      },
      {
        text: [
          '3. ',
          { text: 'Obey God: ', bold: true },
          'Start with the main passage listed above and do the following:'
        ],
        style: 'body'
      },
      {
        ul: [
          {
            text:
              'Memorizing accurately—What is the Scripture you need to remember right now?',
            style: 'body'
          },
          {
            ul: [
              {
                text: '_____________________________________________________',
                style: 'subitem',
                listType: 'none'
              }
            ]
          },
          {
            text:
              'Yielding quickly—How will you submit your will and emotions to this truth?',
            style: 'body'
          },
          {
            ul: [
              {
                text: '_____________________________________________________',
                style: 'subitem',
                listType: 'none'
              }
            ]
          },
          {
            text:
              'Meditating daily—How is God changing your mind through this Scripture?',
            style: 'body'
          },
          {
            ul: [
              {
                text: '_____________________________________________________',
                style: 'subitem',
                listType: 'none'
              }
            ]
          },
          {
            text:
              'Applying intentionally—What mindset or habits does this truth direct you to change now?',
            style: 'body'
          },
          {
            ul: [
              {
                text: '_____________________________________________________',
                style: 'subitem',
                listType: 'none'
              }
            ]
          },
          {
            text:
              'Praying dependently—How does this Scripture call you to depend on God in prayer?',
            style: 'body'
          },
          {
            ul: [
              {
                text: '_____________________________________________________',
                style: 'subitem',
                listType: 'none'
              }
            ]
          }
        ],
        style: 'list'
      },
      {
        text: [
          '4. ',
          { text: 'Wait on God: ', bold: true },
          'Read the Scripture passages associated with each step and answer each question specifically.'
        ],
        style: 'body'
      },
      {
        ul: [
          {
            text:
              'Wait patiently on God (Psalm 27:13-14 and 1 John 5:14-15). What does waiting patiently look like in this situation?',
            style: 'body'
          },
          {
            ul: [
              {
                text: '_____________________________________________________',
                style: 'subitem',
                listType: 'none'
              }
            ]
          },
          {
            text:
              'Persevere in God (James 1:2-4;12, 1 Peter 1:7-7). How can you continue to remain under this trial/struggle?',
            style: 'body'
          },
          {
            ul: [
              {
                text: '_____________________________________________________',
                style: 'subitem',
                listType: 'none'
              }
            ]
          },
          {
            text:
              'Pray persistently (Ephesians 6:18 and Philippians 4:6-7). What can you commit to praying about daily? ',
            style: 'body'
          },
          {
            ul: [
              {
                text: '_____________________________________________________',
                style: 'subitem',
                listType: 'none'
              }
            ]
          }
        ],
        style: 'list'
      }
    ],
    ...config
  }

  return pdfMake.createPdf(definition).download(`homework.pdf`)
}

export default createPdf
