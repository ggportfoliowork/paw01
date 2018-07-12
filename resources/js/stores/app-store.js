import Vue from 'vue'
import _ from 'lodash'
import Vuex from 'vuex'
import {HttpClient} from '../lib/HttpClient'

Vue.use(Vuex);

const appStore = new Vuex.Store({
  state: {
      user: null,
      available_states: [
        {
          key: 'AL',
          value: 'Alabama',
        },
        {
          key: 'AK',
          value: 'Alaska'
        },
        {
          key: 'AZ',
          value: 'Arizona'
        },
        {
          key: 'AR',
          value: 'Arkansas'
        },
        {
          key: 'CA',
          value: 'California'
        },
        {
          key: 'CO',
          value: 'Colorado'
        },
        {
          key: 'CT',
          value: 'Connecticut'
        },
        {
          key: 'DE',
          value: 'Deleware'
        },
        {
          key: 'DC',
          value: 'District Of Columbia'
        },
        {
          key: 'FL',
          value: 'Florida'
        },
        {
          key: 'GA',
          value: 'Georgia'
        },
        {
          key: 'HI',
          value: 'Hawaii'
        },
        {
          key: 'ID',
          value: 'Idaho'
        },
        {
          key: 'IL',
          value: 'Illinois'
        },
        {
          key: 'IN',
          value: 'Indiana'
        },
        {
          key: 'IA',
          value: 'Iowa'
        },
        {
          key: 'KS',
          value: 'Kansas'
        },
        {
          key: 'KY',
          value: 'Kentucky'
        },
        {
          key: 'LA',
          value: 'Louisiana'
        },
        {
          key: 'ME',
          value: 'Maine'
        },
        {
          key: 'MD',
          value: 'Maryland'
        },
        {
          key: 'MA',
          value: 'Massachusetts'
        },
        {
          key: 'MS',
          value: 'Mississippi'
        },
        {
          key: 'MI',
          value: 'Michigan'
        },
        {
          key: 'MN',
          value: 'Minnesota'
        },
        {
          key: 'MO',
          value: 'Missouri'
        },
        {
          key: 'MT',
          value: 'Montana'
        },
        {
          key: 'NH',
          value: 'New Hampshire'
        },
        {
          key: 'NJ',
          value: 'New Jersey'
        },
        {
          key: 'NM',
          value: 'New Mexico'
        },
        {
          key: 'NY',
          value: 'New York'
        },
        {
          key: 'NC',
          value: 'North Carolina'
        },
        {
          key: 'ND',
          value: 'North Dakota'
        },
        {
          key: 'OH',
          value: 'Ohio'
        },
        {
          key: 'OK',
          value: 'Oklahoma'
        },
        {
          key: 'OR',
          value: 'Oregon'
        },
        {
          key: 'PA',
          value: 'Pennsylvania'
        },
        {
          key: 'RI',
          value: 'Rhode Island'
        },
        {
          key: 'SC',
          value: 'South Carolina'
        },
        {
          key: 'SD',
          value: 'South Dakota'
        },
        {
          key: 'TN',
          value: 'Tennessee'
        },
        {
          key: 'TX',
          value: 'Texas'
        },
        {
          key: 'UT',
          value: 'Utah'
        },
        {
          key: 'VT',
          value: 'Vermont'
        },
        {
          key: 'VA',
          value: 'Virginia'
        },
        {
          key: 'WA',
          value: 'Washington'
        },
        {
          key: 'WV',
          value: 'West Virginia'
        },
        {
          key: 'WI',
          value: 'Wisconsin'
        },
        {
          key: 'WY',
          value: 'Wyoming'
        },
      ],
      available_breeds: [
          {
            "id": 1,
            "species_id": 1,
            "name": "Affenpinscher",

          },
          {
            "id": 2,
            "species_id": 1,
            "name": "Afghan Hound",

          },
          {
            "id": 3,
            "species_id": 1,
            "name": "Airedale Terrier",

          },
          {
            "id": 4,
            "species_id": 1,
            "name": "Akita",

          },
          {
            "id": 5,
            "species_id": 1,
            "name": "Alaskan Malamute",

          },
          {
            "id": 6,
            "species_id": 1,
            "name": "American Bulldog",

          },
          {
            "id": 7,
            "species_id": 1,
            "name": "American Eskimo Dog",

          },
          {
            "id": 8,
            "species_id": 1,
            "name": "American Foxhound",

          },
          {
            "id": 9,
            "species_id": 1,
            "name": "American Staffordshire Terrier",

          },
          {
            "id": 10,
            "species_id": 1,
            "name": "American Water Spaniel",

          },
          {
            "id": 11,
            "species_id": 1,
            "name": "Anatolian Shepherd Dog",

          },
          {
            "id": 12,
            "species_id": 1,
            "name": "Australian Cattle Dog",

          },
          {
            "id": 13,
            "species_id": 1,
            "name": "Australian Kelpie",

          },
          {
            "id": 14,
            "species_id": 1,
            "name": "Australian Shepherd",

          },
          {
            "id": 15,
            "species_id": 1,
            "name": "Australian Terrier",

          },
          {
            "id": 16,
            "species_id": 1,
            "name": "Basenji",

          },
          {
            "id": 17,
            "species_id": 1,
            "name": "Basset Hound",

          },
          {
            "id": 18,
            "species_id": 1,
            "name": "Beagle",

          },
          {
            "id": 19,
            "species_id": 1,
            "name": "Bearded Collie",

          },
          {
            "id": 20,
            "species_id": 1,
            "name": "Beauceron",

          },
          {
            "id": 21,
            "species_id": 1,
            "name": "Bedlington Terrier",

          },
          {
            "id": 22,
            "species_id": 1,
            "name": "Belgian Malinois",

          },
          {
            "id": 23,
            "species_id": 1,
            "name": "Belgian Sheepdog",

          },
          {
            "id": 24,
            "species_id": 1,
            "name": "Belgian Tervuren",

          },
          {
            "id": 25,
            "species_id": 1,
            "name": "Bernese Mountain Dog",

          },
          {
            "id": 26,
            "species_id": 1,
            "name": "Bichon Frise",

          },
          {
            "id": 27,
            "species_id": 1,
            "name": "Black and Tan Coonhound",

          },
          {
            "id": 28,
            "species_id": 1,
            "name": "Black Mouth Cur",

          },
          {
            "id": 29,
            "species_id": 1,
            "name": "Black Russian Terrier",

          },
          {
            "id": 30,
            "species_id": 1,
            "name": "Bloodhound",

          },
          {
            "id": 31,
            "species_id": 1,
            "name": "Bluetick Coonhound",

          },
          {
            "id": 32,
            "species_id": 1,
            "name": "Border Collie",

          },
          {
            "id": 33,
            "species_id": 1,
            "name": "Border Terrier",

          },
          {
            "id": 34,
            "species_id": 1,
            "name": "Borzoi",

          },
          {
            "id": 35,
            "species_id": 1,
            "name": "Boston Terrier",

          },
          {
            "id": 36,
            "species_id": 1,
            "name": "Bouvier des Flandres",

          },
          {
            "id": 37,
            "species_id": 1,
            "name": "Boxer",

          },
          {
            "id": 38,
            "species_id": 1,
            "name": "Boykin Spaniel",

          },
          {
            "id": 39,
            "species_id": 1,
            "name": "Briard",

          },
          {
            "id": 40,
            "species_id": 1,
            "name": "Brittany",

          },
          {
            "id": 41,
            "species_id": 1,
            "name": "Brussels Griffon",

          },
          {
            "id": 42,
            "species_id": 1,
            "name": "Bull Terrier",

          },
          {
            "id": 43,
            "species_id": 1,
            "name": "Bullmastiff",

          },
          {
            "id": 44,
            "species_id": 1,
            "name": "Cairn Terrier",

          },
          {
            "id": 45,
            "species_id": 1,
            "name": "Canaan Dog",

          },
          {
            "id": 46,
            "species_id": 1,
            "name": "Cardigan Welsh Corgi",

          },
          {
            "id": 47,
            "species_id": 1,
            "name": "Catahoula Leopard",

          },
          {
            "id": 48,
            "species_id": 1,
            "name": "Cavalier King Charles Spaniel",

          },
          {
            "id": 49,
            "species_id": 1,
            "name": "Chesapeake Bay Retriever",

          },
          {
            "id": 50,
            "species_id": 1,
            "name": "Chihuahua",

          },
          {
            "id": 51,
            "species_id": 1,
            "name": "Chinese Crested",

          },
          {
            "id": 52,
            "species_id": 1,
            "name": "Chinese SharPei",

          },
          {
            "id": 53,
            "species_id": 1,
            "name": "Chow Chow",

          },
          {
            "id": 54,
            "species_id": 1,
            "name": "Clumber Spaniel",

          },
          {
            "id": 55,
            "species_id": 1,
            "name": "Cocker Spaniel",

          },
          {
            "id": 56,
            "species_id": 1,
            "name": "Collie",

          },
          {
            "id": 57,
            "species_id": 1,
            "name": "Coton de Tulear",

          },
          {
            "id": 58,
            "species_id": 1,
            "name": "CurlyCoated Retriever",

          },
          {
            "id": 59,
            "species_id": 1,
            "name": "Dachshund",

          },
          {
            "id": 60,
            "species_id": 1,
            "name": "Dalmatian",

          },
          {
            "id": 61,
            "species_id": 1,
            "name": "Dandie Dinmont Terrier",

          },
          {
            "id": 62,
            "species_id": 1,
            "name": "Doberman Pinscher",

          },
          {
            "id": 63,
            "species_id": 1,
            "name": "Dogue de Bordeaux",

          },
          {
            "id": 64,
            "species_id": 1,
            "name": "English Bulldog",

          },
          {
            "id": 65,
            "species_id": 1,
            "name": "English Cocker Spaniel",

          },
          {
            "id": 66,
            "species_id": 1,
            "name": "English Foxhound",

          },
          {
            "id": 67,
            "species_id": 1,
            "name": "English Setter",

          },
          {
            "id": 68,
            "species_id": 1,
            "name": "English Springer Spaniel",

          },
          {
            "id": 69,
            "species_id": 1,
            "name": "English Toy Spaniel",

          },
          {
            "id": 70,
            "species_id": 1,
            "name": "Field Spaniel",

          },
          {
            "id": 71,
            "species_id": 1,
            "name": "Finnish Spitz",

          },
          {
            "id": 72,
            "species_id": 1,
            "name": "FlatCoated Retriever",

          },
          {
            "id": 73,
            "species_id": 1,
            "name": "French Bulldog",

          },
          {
            "id": 74,
            "species_id": 1,
            "name": "German Pinscher",

          },
          {
            "id": 75,
            "species_id": 1,
            "name": "German Shepherd Dog",

          },
          {
            "id": 76,
            "species_id": 1,
            "name": "German Shorthaired Pointer",

          },
          {
            "id": 77,
            "species_id": 1,
            "name": "German Spitz",

          },
          {
            "id": 78,
            "species_id": 1,
            "name": "German Wirehaired Pointer",

          },
          {
            "id": 79,
            "species_id": 1,
            "name": "Giant Schnauzer",

          },
          {
            "id": 80,
            "species_id": 1,
            "name": "Glen of Imaal Terrier",

          },
          {
            "id": 81,
            "species_id": 1,
            "name": "Golden Retriever",

          },
          {
            "id": 82,
            "species_id": 1,
            "name": "Gordon Setter",

          },
          {
            "id": 83,
            "species_id": 1,
            "name": "Great Dane",

          },
          {
            "id": 84,
            "species_id": 1,
            "name": "Great Pyrenees",

          },
          {
            "id": 85,
            "species_id": 1,
            "name": "Greater Swiss Mountain Dog",

          },
          {
            "id": 86,
            "species_id": 1,
            "name": "Greyhound",

          },
          {
            "id": 87,
            "species_id": 1,
            "name": "Harrier",

          },
          {
            "id": 88,
            "species_id": 1,
            "name": "Havanese",

          },
          {
            "id": 89,
            "species_id": 1,
            "name": "Hovawart",

          },
          {
            "id": 90,
            "species_id": 1,
            "name": "Ibizan Hound",

          },
          {
            "id": 91,
            "species_id": 1,
            "name": "Irish Setter",

          },
          {
            "id": 92,
            "species_id": 1,
            "name": "Irish Terrier",

          },
          {
            "id": 93,
            "species_id": 1,
            "name": "Irish Water Spaniel",

          },
          {
            "id": 94,
            "species_id": 1,
            "name": "Irish Wolfhound",

          },
          {
            "id": 95,
            "species_id": 1,
            "name": "Italian Greyhound",

          },
          {
            "id": 96,
            "species_id": 1,
            "name": "Jack Russell Terrier",

          },
          {
            "id": 97,
            "species_id": 1,
            "name": "Japanese Chin",

          },
          {
            "id": 98,
            "species_id": 1,
            "name": "Karelian Bear Dog",

          },
          {
            "id": 99,
            "species_id": 1,
            "name": "Keeshond",

          },
          {
            "id": 100,
            "species_id": 1,
            "name": "Kerry Blue Terrier",

          },
          {
            "id": 101,
            "species_id": 1,
            "name": "Komondor",

          },
          {
            "id": 102,
            "species_id": 1,
            "name": "Kuvasz",

          },
          {
            "id": 103,
            "species_id": 1,
            "name": "Labrador Retriever",

          },
          {
            "id": 104,
            "species_id": 1,
            "name": "Lakeland Terrier",

          },
          {
            "id": 105,
            "species_id": 1,
            "name": "Lhasa Apso",

          },
          {
            "id": 106,
            "species_id": 1,
            "name": "Lowchen",

          },
          {
            "id": 107,
            "species_id": 1,
            "name": "Maltese",

          },
          {
            "id": 108,
            "species_id": 1,
            "name": "Manchester Terrier",

          },
          {
            "id": 109,
            "species_id": 1,
            "name": "Mastiff",

          },
          {
            "id": 110,
            "species_id": 1,
            "name": "Miniature Bull Terrier",

          },
          {
            "id": 111,
            "species_id": 1,
            "name": "Miniature Pinscher",

          },
          {
            "id": 112,
            "species_id": 1,
            "name": "Miniature Schnauzer",

          },
          {
            "id": 113,
            "species_id": 1,
            "name": "Mutt",

          },
          {
            "id": 114,
            "species_id": 1,
            "name": "Neapolitan Mastiff",

          },
          {
            "id": 115,
            "species_id": 1,
            "name": "Newfoundland",

          },
          {
            "id": 116,
            "species_id": 1,
            "name": "Norfolk Terrier",

          },
          {
            "id": 117,
            "species_id": 1,
            "name": "Norwegian Elkhound",

          },
          {
            "id": 118,
            "species_id": 1,
            "name": "Norwich Terrier",

          },
          {
            "id": 119,
            "species_id": 1,
            "name": "Nova Scotia Retriever",

          },
          {
            "id": 120,
            "species_id": 1,
            "name": "Old English Sheepdog",

          },
          {
            "id": 121,
            "species_id": 1,
            "name": "Other",

          },
          {
            "id": 122,
            "species_id": 1,
            "name": "Otterhound",

          },
          {
            "id": 123,
            "species_id": 1,
            "name": "Papillon",

          },
          {
            "id": 124,
            "species_id": 1,
            "name": "Patterdale Terrier",

          },
          {
            "id": 125,
            "species_id": 1,
            "name": "Pekingese",

          },
          {
            "id": 126,
            "species_id": 1,
            "name": "Pembroke Welsh Corgi",

          },
          {
            "id": 127,
            "species_id": 1,
            "name": "Petit Basset Griffon Vendeen",

          },
          {
            "id": 128,
            "species_id": 1,
            "name": "Pharaoh Hound",

          },
          {
            "id": 129,
            "species_id": 1,
            "name": "Pit Bull",

          },
          {
            "id": 130,
            "species_id": 1,
            "name": "Plott",

          },
          {
            "id": 131,
            "species_id": 1,
            "name": "Pointer",

          },
          {
            "id": 132,
            "species_id": 1,
            "name": "Polish Lowland Sheepdog",

          },
          {
            "id": 133,
            "species_id": 1,
            "name": "Pomeranian",

          },
          {
            "id": 134,
            "species_id": 1,
            "name": "Poodle",

          },
          {
            "id": 135,
            "species_id": 1,
            "name": "Portuguese Water Dog",

          },
          {
            "id": 136,
            "species_id": 1,
            "name": "Pug",

          },
          {
            "id": 137,
            "species_id": 1,
            "name": "Puli",

          },
          {
            "id": 138,
            "species_id": 1,
            "name": "Rat Terrier",

          },
          {
            "id": 139,
            "species_id": 1,
            "name": "Redbone Coonhound",

          },
          {
            "id": 140,
            "species_id": 1,
            "name": "Rhodesian Rspecies_idgeback",

          },
          {
            "id": 141,
            "species_id": 1,
            "name": "Rottweiler",

          },
          {
            "id": 142,
            "species_id": 1,
            "name": "Saluki",

          },
          {
            "id": 143,
            "species_id": 1,
            "name": "Samoyed",

          },
          {
            "id": 144,
            "species_id": 1,
            "name": "Schipperke",

          },
          {
            "id": 145,
            "species_id": 1,
            "name": "Scottish Deerhound",

          },
          {
            "id": 146,
            "species_id": 1,
            "name": "Scottish Terrier",

          },
          {
            "id": 147,
            "species_id": 1,
            "name": "Sealyham Terrier",

          },
          {
            "id": 148,
            "species_id": 1,
            "name": "Shetland Sheepdog",

          },
          {
            "id": 149,
            "species_id": 1,
            "name": "Shiba Inu",

          },
          {
            "id": 150,
            "species_id": 1,
            "name": "Shih Tzu",

          },
          {
            "id": 151,
            "species_id": 1,
            "name": "Siberian Husky",

          },
          {
            "id": 152,
            "species_id": 1,
            "name": "Silky Terrier",

          },
          {
            "id": 153,
            "species_id": 1,
            "name": "Skye Terrier",

          },
          {
            "id": 154,
            "species_id": 1,
            "name": "Smooth Fox Terrier",

          },
          {
            "id": 155,
            "species_id": 1,
            "name": "Soft Coated Wheaten Terrier",

          },
          {
            "id": 156,
            "species_id": 1,
            "name": "Spinone Italiano",

          },
          {
            "id": 157,
            "species_id": 1,
            "name": "St. Bernard",

          },
          {
            "id": 158,
            "species_id": 1,
            "name": "Staffordshire Bull Terrier",

          },
          {
            "id": 159,
            "species_id": 1,
            "name": "Standard Schnauzer",

          },
          {
            "id": 160,
            "species_id": 1,
            "name": "Sussex Spaniel",

          },
          {
            "id": 161,
            "species_id": 1,
            "name": "Tibetan Spaniel",

          },
          {
            "id": 162,
            "species_id": 1,
            "name": "Tibetan Terrier",

          },
          {
            "id": 163,
            "species_id": 1,
            "name": "Toy Fox Terrier",

          },
          {
            "id": 164,
            "species_id": 1,
            "name": "Treeing Walker Coonhound",

          },
          {
            "id": 165,
            "species_id": 1,
            "name": "Vizsla",

          },
          {
            "id": 166,
            "species_id": 1,
            "name": "Weimaraner",

          },
          {
            "id": 167,
            "species_id": 1,
            "name": "Welsh Springer Spaniel",

          },
          {
            "id": 168,
            "species_id": 1,
            "name": "Welsh Terrier",

          },
          {
            "id": 169,
            "species_id": 1,
            "name": "West Highland White Terrier",

          },
          {
            "id": 170,
            "species_id": 1,
            "name": "Whippet",

          },
          {
            "id": 171,
            "species_id": 1,
            "name": "Wire Fox Terrier",

          },
          {
            "id": 172,
            "species_id": 1,
            "name": "Wirehaired Pointing Griffon",

          },
          {
            "id": 173,
            "species_id": 1,
            "name": "Yorkshire Terrier",

          },
          {
            "id": 174,
            "species_id": 1,
            "name": "Mutt",

          },
          {
            "id": 175,
            "species_id": 2,
            "name": "Abyssyian",

          },
          {
            "id": 176,
            "species_id": 2,
            "name": "American Bobtail",

          },
          {
            "id": 177,
            "species_id": 2,
            "name": "American Curl",

          },
          {
            "id": 178,
            "species_id": 2,
            "name": "American Shorthair",

          },
          {
            "id": 179,
            "species_id": 2,
            "name": "American Wirehair",

          },
          {
            "id": 180,
            "species_id": 2,
            "name": "Angora",

          },
          {
            "id": 181,
            "species_id": 2,
            "name": "Asian Semi-longhair",

          },
          {
            "id": 182,
            "species_id": 2,
            "name": "Asian Shorthair",

          },
          {
            "id": 183,
            "species_id": 2,
            "name": "Australian Mist",

          },
          {
            "id": 184,
            "species_id": 2,
            "name": "Balinese",

          },
          {
            "id": 185,
            "species_id": 2,
            "name": "Bengal cat",

          },
          {
            "id": 186,
            "species_id": 2,
            "name": "Birman",

          },
          {
            "id": 187,
            "species_id": 2,
            "name": "Bombay",

          },
          {
            "id": 188,
            "species_id": 2,
            "name": "Brazilian Shorthair",

          },
          {
            "id": 189,
            "species_id": 2,
            "name": "British Shorthair",

          },
          {
            "id": 190,
            "species_id": 2,
            "name": "Burmese",

          },
          {
            "id": 191,
            "species_id": 2,
            "name": "Burmilla",

          },
          {
            "id": 192,
            "species_id": 2,
            "name": "California Spangled Cat",

          },
          {
            "id": 193,
            "species_id": 2,
            "name": "Chantilly/Tiffany cat",

          },
          {
            "id": 194,
            "species_id": 2,
            "name": "Chartreux",

          },
          {
            "id": 195,
            "species_id": 2,
            "name": "Chausie",

          },
          {
            "id": 196,
            "species_id": 2,
            "name": "Cherubim",

          },
          {
            "id": 197,
            "species_id": 2,
            "name": "Colorpoint Shorthair",

          },
          {
            "id": 198,
            "species_id": 2,
            "name": "Colourpoint Longhair",

          },
          {
            "id": 199,
            "species_id": 2,
            "name": "Cornish Rex",

          },
          {
            "id": 200,
            "species_id": 2,
            "name": "Cymric",

          },
          {
            "id": 201,
            "species_id": 2,
            "name": "Devon Rex",

          },
          {
            "id": 202,
            "species_id": 2,
            "name": "Domestic Long Hair",

          },
          {
            "id": 203,
            "species_id": 2,
            "name": "Domestic Short Hair",

          },
          {
            "id": 204,
            "species_id": 2,
            "name": "Don Sphynx",

          },
          {
            "id": 205,
            "species_id": 2,
            "name": "Egyptian Mau",

          },
          {
            "id": 206,
            "species_id": 2,
            "name": "European Shorthair",

          },
          {
            "id": 207,
            "species_id": 2,
            "name": "Exotic Shorthair",

          },
          {
            "id": 208,
            "species_id": 2,
            "name": "German Rex",

          },
          {
            "id": 209,
            "species_id": 2,
            "name": "Havana Brown",

          },
          {
            "id": 210,
            "species_id": 2,
            "name": "Himalayan",

          },
          {
            "id": 211,
            "species_id": 2,
            "name": "Japanese Bobtail",

          },
          {
            "id": 212,
            "species_id": 2,
            "name": "Javanese",

          },
          {
            "id": 213,
            "species_id": 2,
            "name": "Korat",

          },
          {
            "id": 214,
            "species_id": 2,
            "name": "Kurilean Bobtail Longhair",

          },
          {
            "id": 215,
            "species_id": 2,
            "name": "Kurilean Bobtail Shorthair",

          },
          {
            "id": 216,
            "species_id": 2,
            "name": "LaPerm",

          },
          {
            "id": 217,
            "species_id": 2,
            "name": "Maine Coon",

          },
          {
            "id": 218,
            "species_id": 2,
            "name": "Malayan",

          },
          {
            "id": 219,
            "species_id": 2,
            "name": "Manx",

          },
          {
            "id": 220,
            "species_id": 2,
            "name": "Mix",

          },
          {
            "id": 221,
            "species_id": 2,
            "name": "Munchkin",

          },
          {
            "id": 222,
            "species_id": 2,
            "name": "Nebelung",

          },
          {
            "id": 223,
            "species_id": 2,
            "name": "Norwegian Forest Cat",

          },
          {
            "id": 224,
            "species_id": 2,
            "name": "Ocicat",

          },
          {
            "id": 225,
            "species_id": 2,
            "name": "Ojos Azules",

          },
          {
            "id": 226,
            "species_id": 2,
            "name": "Oriental Longhair",

          },
          {
            "id": 227,
            "species_id": 2,
            "name": "Oriental Shorthair",

          },
          {
            "id": 228,
            "species_id": 2,
            "name": "Other",

          },
          {
            "id": 229,
            "species_id": 2,
            "name": "Persian",

          },
          {
            "id": 230,
            "species_id": 2,
            "name": "Peterbald",

          },
          {
            "id": 231,
            "species_id": 2,
            "name": "Pixie-bob",

          },
          {
            "id": 232,
            "species_id": 2,
            "name": "Ragdoll",

          },
          {
            "id": 233,
            "species_id": 2,
            "name": "Russian Blue",

          },
          {
            "id": 234,
            "species_id": 2,
            "name": "Savannah",

          },
          {
            "id": 235,
            "species_id": 2,
            "name": "Scottish Fold",

          },
          {
            "id": 236,
            "species_id": 2,
            "name": "Selkirk Rex",

          },
          {
            "id": 237,
            "species_id": 2,
            "name": "Siamese",

          },
          {
            "id": 238,
            "species_id": 2,
            "name": "Siberian",

          },
          {
            "id": 239,
            "species_id": 2,
            "name": "Singapura",

          },
          {
            "id": 240,
            "species_id": 2,
            "name": "Snowshoe",

          },
          {
            "id": 241,
            "species_id": 2,
            "name": "Sokoke",

          },
          {
            "id": 242,
            "species_id": 2,
            "name": "Somali",

          },
          {
            "id": 243,
            "species_id": 2,
            "name": "Sphynx",

          },
          {
            "id": 244,
            "species_id": 2,
            "name": "Sterling",

          },
          {
            "id": 245,
            "species_id": 2,
            "name": "Tonkinese",

          },
          {
            "id": 246,
            "species_id": 2,
            "name": "Toyger",

          },
          {
            "id": 247,
            "species_id": 2,
            "name": "Turkish Angora",

          },
          {
            "id": 248,
            "species_id": 2,
            "name": "Turkish Van",

          },
          {
            "id": 249,
            "species_id": 2,
            "name": "York Chocolate",
          }
      ],
      defaultPetPhoto: 'data:image/jpeg;base64,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QR/hC//aAAwDAQACAAMAAAAQ8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888884MYoA088888888888888888880sNtos488888kE0888888888soN999Ec88888E0YY8884ww4Iog99995888888c8dAoIQQUY0xN999w0wY88888skYJFZd9d999999t40sc888888sc0d9999999999po8888888888sg999999999998c88888888888g999519199950U8888888888ok999ooU8x19tw88888888884Mh99EYcscMY9x088888888880kd1MQc888sI9kY8888888888cVsQws08888g95A8888888888814gFUU8884s5Io88888888888FgQQk8888s8FkU8888888888QYoU8888888IQQc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888//EABwRAAICAwEBAAAAAAAAAAAAAAERADAQQFBwYP/aAAgBAwEBPxDzxx6Ljj4Q+HUWBcaxxjsnKoFx9E//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAECAQE/EBx//8QALBABAAIABAQGAgMAAwAAAAAAAQARECExUUBBYXEgMJGhscGB0VDh8ICQ8f/aAAgBAQABPxD/AIj34bv+LXAZzWjlO5o2P3DCH8ScBB5GdWexM8beeXpKMdoVEEp0lsNvPT6S6D/dnt/FAsBLBTb3eFBKcxiIFJQ5D50PEsXC3qM+raABRkGh4tKwr+40TmyOj+cYHynC5fEQ5W1BOVGZu7zfIBAE1HMli3vn6lu65PJ7MXlaJUxmK5ud5O8zvm6fV6y4PBXheJXIP8Zv15acmWDy6+X0QRJRmJKNGWkdDuS4v53Odt4QQPkXLly5cuXiMOBB5Qz2j9wKKVB5WrjQdWLGzdDkGxB5TEgpLqBIAVDpt29Zf0845d3WInHqMIMFy5cuX5AVlk3htC5nIb2v0hD20IOGf+z8S6xANb3i1nqZrpOxRdPyP6/uav8AshElp9uhgB5TgkzVjSaMKrVo+11mopyGpLINs/e0IPCFlln2hyz5xZQblO4gnL/CfbSznR3BU3u67g9DbCvJqmy8++AY0gPOYSZVticujEpNfkDDt1Rafh5REw9Rxg/R4XNqt1UToG4fuc3nVU0YO9WwGgrt5+i2Mjd5EtDtrPXAqVjXAg8X8vfs6QsTMCSlK6J/l+6fFBfzAaIbGXCWP+Q5HpBBDhiyFnav1sxobXqOzwwMaBZmioUPE4DQ1zb/AAcN3P8Aqy+4MJw8urFo34ffkfSDhzhsXZfPD0Bpc7v/AJBDhnAM7p+eH2eaHbSHh3Bmdo8gmxPVqWevsbhffqPuck+wZlrfp+4dG+irPJJU5R8sEEOIO8vr4j0NdXXlHPw/7xPYe63DHs9y7JRA+5kzK02j9wuy+jfie25T0hhwziVLuviuI0/oMI8IGGGbK0rchVCO9zX8JYaYpz4gww8Q44rGuZ8N0xPwdWZl7W1d8SsawrwCu7y+zjR+A9yDAcMuE4Wi30HOAADIMg8GUHSHLqYrkVauAQ8dRwm/y/DjQGwe9/XFAzkaxFPfNm3gA8zRNjdlpdRauEHlOE30F8Yqusfh4gUbALWQEuB3r+U9cFAtyDVmu268net8OwB7L+4fMOE2+i+sQ38v1YsBwrgpmeR64FkBascb/e7unSa3Zfc5ke6xsiETK99HCvLcHaH2MVApUBrdxMgR2eGuH2J94Pe8zqcRcPJ9XmQ05eZ1i6o6jFCHkuD2oe64WXXPbBmiKy3XwxwvJ6fmFpRn9EUhtFXrgMITTWM5hpmbO0P/AC/P1hy12t50Q8pwkLklOuWmGZ9mDk6/cyqr1Rcun60HCuH8UD3j0OUvd+saoww5R1NT0lEvqGaN2LqsIeSwxdbA4MVcpT15kMMOFcP4oPaLoz6ksgUMkcdYgeWwRyDtC1cBJTPssNlzl5G48OYIzfUfbCjYTJ+HXFUrCpXlMcDLOdDmdoozo7QDo6gJtBw6TZ2roYTmDsfqZrbA4JI4BAcPXgVcHUqV/wBFn//Z',
      profilePhoto: '/profile-pics/default.jpg'
  },
  getters: {
      user: state => {
        return state.user
      },
      available_states: state => {
        return state.available_states
      },
      available_breeds: state => {
        return state.available_breeds
      },
      profilePhoto: state => {
        return state.profilePhoto
      },
      defaultPetPhoto: state => {
        return state.defaultPetPhoto
      }
  },
  mutations: {
    setCurrentUser(state, user) {
        if(user.profile_photos && user.profile_photos !== null) {
          state.profilePhoto = '/profile-pics/'+user.profile_photos.file_name
        } else {
          state.profilePhoto = '/profile-pics/default.jpg'
        }
        state.user = _.assign({}, state.user, user)
    },
    setProfilePhoto(state, profilePhoto) {
        state.profilePhoto = profilePhoto
    },
    setAvailableBreeds(state, breeds) {
      state.available_breeds = breeds
    }
  },
  actions: {
      SET_USER(context, user) {
        HttpClient.get('users/profile')
          .then(response => {
              context.commit('setCurrentUser', response.data.data)
          })
      },
      SET_USER_PROFILE_PHOTO(context, profilePhoto) {
        context.commit('setProfilePhoto', '/profile-pics/'+profilePhoto)
      },
      REFRESH_USER_TOKEN(state, user) {

      },
      SET_AVAILABLE_BREEDS(context) {
        HttpClient.get('breeds')
          .then(response => {
            context.commit('setAvailableBreeds', response.data.data)
          })
      }
  }
});

export default appStore;
