import { Question, QuestionType } from './types';

const cleanUrl = (url?: string): string | undefined => {
    if (!url) return undefined;
    return url.trim()
        .replace(/\s+/g, '')
        .replace(/res\.ioe\.vnzedu/, 'res.ioe.vn/edu')
        .replace(/res\.ioe\.vii/, 'res.ioe.vn')
        .replace(/res\.ioe\.vm/, 'res.ioe.vn')
        .replace(/Audio\s*mp3/i, 'Audio.mp3')
        .replace(/ImageExam\s*(\d)/, 'ImageExam/$1')
        .replace(/Olympic\s*ExamData/, 'OlympicExamData')
        .replace(/EOlympic\s*ExamData/, 'EOlympic/ExamData')
        .replace(/'/g, '')
        .replace(/Audio-mp3/i, 'Audio.mp3');
};

export const QUIZ_DATA: Question[] = [
  // --- PART 1: GREETINGS & INTRO (1-10) ---
  { id: 1, type: QuestionType.FILL_IN_BLANK, questionText: "H_llo, Nam.", correctAnswer: "e", explanation: "Hello: Xin chào." },
  { id: 2, type: QuestionType.REARRANGE, questionText: "Sắp xếp câu:", rearrangeParts: ["Nice", "to", "meet", "you."], correctAnswer: "Nice to meet you.", explanation: "Rất vui được gặp bạn." },
  { id: 3, type: QuestionType.REARRANGE, questionText: "Sắp xếp câu:", rearrangeParts: ["is", "your", "What", "name?"], correctAnswer: "What is your name?", explanation: "Tên của bạn là gì?" },
  { id: 4, type: QuestionType.FILL_IN_BLANK, questionText: "My n_me is Peter.", correctAnswer: "a", explanation: "Name: Tên." },
  { id: 5, type: QuestionType.MULTIPLE_CHOICE, questionText: "How ___ you? - I'm fine.", options: ["is", "am", "are", "it"], correctAnswer: "are", explanation: "How are you: Bạn có khỏe không?" },
  { id: 6, type: QuestionType.REARRANGE, questionText: "Sắp xếp câu:", rearrangeParts: ["am", "fine,", "thanks.", "I"], correctAnswer: "I am fine, thanks.", explanation: "Tôi khỏe, cảm ơn." },
  { id: 7, type: QuestionType.FILL_IN_BLANK, questionText: "G_odbye, teacher.", correctAnswer: "o", explanation: "Goodbye: Tạm biệt." },
  { id: 8, type: QuestionType.MULTIPLE_CHOICE, questionText: "See you ___.", options: ["later", "late", "letter", "let"], correctAnswer: "later", explanation: "See you later: Hẹn gặp lại sau." },
  { id: 9, type: QuestionType.FILL_IN_BLANK, questionText: "Good mo_ning.", correctAnswer: "r", explanation: "Morning: Buổi sáng." },
  { id: 10, type: QuestionType.MULTIPLE_CHOICE, questionText: "___, Mai. - Bye, Nam.", options: ["Bye", "Good", "Nice", "Meet"], correctAnswer: "Bye", explanation: "Bye: Tạm biệt." },

  // --- PART 2: NUMBERS 1-10 (11-20) ---
  { id: 11, type: QuestionType.FILL_IN_BLANK, questionText: "O_e", correctAnswer: "n", explanation: "One: Số 1." },
  { id: 12, type: QuestionType.MULTIPLE_CHOICE, questionText: "What number is it?", options: ["Two", "Ten", "Three", "Tea"], correctAnswer: "Two", explanation: "Two: Số 2." },
  { id: 13, type: QuestionType.FILL_IN_BLANK, questionText: "Th_ee", correctAnswer: "r", explanation: "Three: Số 3." },
  { id: 14, type: QuestionType.MULTIPLE_CHOICE, questionText: "Choose number 4:", options: ["Four", "Five", "Six", "One"], correctAnswer: "Four", explanation: "Four: Số 4." },
  { id: 15, type: QuestionType.FILL_IN_BLANK, questionText: "F_ve", correctAnswer: "i", explanation: "Five: Số 5." },
  { id: 16, type: QuestionType.MULTIPLE_CHOICE, questionText: "What comes after Five?", options: ["Six", "Seven", "Four", "Two"], correctAnswer: "Six", explanation: "Sau số 5 là số 6 (Six)." },
  { id: 17, type: QuestionType.FILL_IN_BLANK, questionText: "Se_en", correctAnswer: "v", explanation: "Seven: Số 7." },
  { id: 18, type: QuestionType.MULTIPLE_CHOICE, questionText: "Eight is number ___.", options: ["8", "9", "7", "10"], correctAnswer: "8", explanation: "Eight: Số 8." },
  { id: 19, type: QuestionType.FILL_IN_BLANK, questionText: "N_ne", correctAnswer: "i", explanation: "Nine: Số 9." },
  { id: 20, type: QuestionType.MULTIPLE_CHOICE, questionText: "___ fingers.", options: ["Ten", "Pen", "Hen", "Men"], correctAnswer: "Ten", explanation: "Ten: Số 10." },

  // --- PART 3: COLORS (21-30) ---
  { id: 21, type: QuestionType.FILL_IN_BLANK, questionText: "It is r_d.", correctAnswer: "e", explanation: "Red: Màu đỏ." },
  { id: 22, type: QuestionType.MULTIPLE_CHOICE, questionText: "The sky is ___.", options: ["blue", "red", "green", "yellow"], correctAnswer: "blue", explanation: "Blue: Màu xanh dương (Bầu trời thường màu xanh)." },
  { id: 23, type: QuestionType.FILL_IN_BLANK, questionText: "Gr_en", correctAnswer: "e", explanation: "Green: Màu xanh lá cây." },
  { id: 24, type: QuestionType.MULTIPLE_CHOICE, questionText: "The sun is ___.", options: ["yellow", "purple", "black", "blue"], correctAnswer: "yellow", explanation: "Yellow: Màu vàng." },
  { id: 25, type: QuestionType.FILL_IN_BLANK, questionText: "Pin_", correctAnswer: "k", explanation: "Pink: Màu hồng." },
  { id: 26, type: QuestionType.MULTIPLE_CHOICE, questionText: "My hair is ___.", options: ["black", "sack", "back", "lack"], correctAnswer: "black", explanation: "Black: Màu đen." },
  { id: 27, type: QuestionType.FILL_IN_BLANK, questionText: "Wh_te", correctAnswer: "i", explanation: "White: Màu trắng." },
  { id: 28, type: QuestionType.MULTIPLE_CHOICE, questionText: "The bear is ___.", options: ["brown", "town", "down", "clown"], correctAnswer: "brown", explanation: "Brown: Màu nâu." },
  { id: 29, type: QuestionType.FILL_IN_BLANK, questionText: "Oran_e", correctAnswer: "g", explanation: "Orange: Màu cam." },
  { id: 30, type: QuestionType.MULTIPLE_CHOICE, questionText: "Grapes are ___.", options: ["purple", "pink", "white", "orange"], correctAnswer: "purple", explanation: "Purple: Màu tím." },

  // --- PART 4: SCHOOL THINGS (31-40) ---
  { id: 31, type: QuestionType.FILL_IN_BLANK, questionText: "This is a p_n.", correctAnswer: "e", explanation: "Pen: Cái bút mực." },
  { id: 32, type: QuestionType.MULTIPLE_CHOICE, questionText: "I have a ___ (thước kẻ).", options: ["ruler", "rubber", "robot", "red"], correctAnswer: "ruler", explanation: "Ruler: Thước kẻ." },
  { id: 33, type: QuestionType.FILL_IN_BLANK, questionText: "B_ok", correctAnswer: "o", explanation: "Book: Quyển sách." },
  { id: 34, type: QuestionType.MULTIPLE_CHOICE, questionText: "Open your ___.", options: ["bag", "big", "bug", "bog"], correctAnswer: "bag", explanation: "Bag: Cặp sách." },
  { id: 35, type: QuestionType.FILL_IN_BLANK, questionText: "Pen_il", correctAnswer: "c", explanation: "Pencil: Bút chì." },
  { id: 36, type: QuestionType.MULTIPLE_CHOICE, questionText: "It is an ___ (cục tẩy).", options: ["eraser", "ear", "eight", "eye"], correctAnswer: "eraser", explanation: "Eraser: Cục tẩy." },
  { id: 37, type: QuestionType.FILL_IN_BLANK, questionText: "D_sk", correctAnswer: "e", explanation: "Desk: Bàn học." },
  { id: 38, type: QuestionType.MULTIPLE_CHOICE, questionText: "Look at the ___.", options: ["board", "boat", "bird", "bed"], correctAnswer: "board", explanation: "Board: Cái bảng." },
  { id: 39, type: QuestionType.FILL_IN_BLANK, questionText: "Tea_her", correctAnswer: "c", explanation: "Teacher: Giáo viên." },
  { id: 40, type: QuestionType.MULTIPLE_CHOICE, questionText: "I am a ___.", options: ["pupil", "purple", "pencil", "people"], correctAnswer: "pupil", explanation: "Pupil: Học sinh." },

  // --- PART 5: FAMILY (41-50) ---
  { id: 41, type: QuestionType.FILL_IN_BLANK, questionText: "Fa_her", correctAnswer: "t", explanation: "Father: Bố." },
  { id: 42, type: QuestionType.MULTIPLE_CHOICE, questionText: "She is my ___ (mẹ).", options: ["mother", "brother", "father", "sister"], correctAnswer: "mother", explanation: "Mother: Mẹ." },
  { id: 43, type: QuestionType.FILL_IN_BLANK, questionText: "Bro_her", correctAnswer: "t", explanation: "Brother: Anh/em trai." },
  { id: 44, type: QuestionType.MULTIPLE_CHOICE, questionText: "He is my ___.", options: ["dad", "mom", "sister", "grandma"], correctAnswer: "dad", explanation: "Dad: Bố (cách gọi thân mật)." },
  { id: 45, type: QuestionType.FILL_IN_BLANK, questionText: "Sist_r", correctAnswer: "e", explanation: "Sister: Chị/em gái." },
  { id: 46, type: QuestionType.MULTIPLE_CHOICE, questionText: "This is my ___ (bà).", options: ["grandmother", "grandfather", "father", "brother"], correctAnswer: "grandmother", explanation: "Grandmother: Bà." },
  { id: 47, type: QuestionType.FILL_IN_BLANK, questionText: "Grand_a", correctAnswer: "p", explanation: "Grandpa: Ông (thân mật)." },
  { id: 48, type: QuestionType.MULTIPLE_CHOICE, questionText: "I love my ___.", options: ["family", "farm", "fish", "four"], correctAnswer: "family", explanation: "Family: Gia đình." },
  { id: 49, type: QuestionType.REARRANGE, questionText: "Sắp xếp câu:", rearrangeParts: ["my", "This", "mom.", "is"], correctAnswer: "This is my mom.", explanation: "Đây là mẹ tôi." },
  { id: 50, type: QuestionType.MULTIPLE_CHOICE, questionText: "Who is he? - He is my ___.", options: ["uncle", "aunt", "sister", "mother"], correctAnswer: "uncle", explanation: "Uncle: Chú/Bác (nam giới)." },

  // --- PART 6: BODY PARTS (51-60) ---
  { id: 51, type: QuestionType.FILL_IN_BLANK, questionText: "H_ad", correctAnswer: "e", explanation: "Head: Cái đầu." },
  { id: 52, type: QuestionType.MULTIPLE_CHOICE, questionText: "Touch your ___ (mắt).", options: ["eye", "ear", "arm", "leg"], correctAnswer: "eye", explanation: "Eye: Mắt." },
  { id: 53, type: QuestionType.FILL_IN_BLANK, questionText: "No_e", correctAnswer: "s", explanation: "Nose: Mũi." },
  { id: 54, type: QuestionType.MULTIPLE_CHOICE, questionText: "Open your ___.", options: ["mouth", "mouse", "month", "moon"], correctAnswer: "mouth", explanation: "Mouth: Miệng." },
  { id: 55, type: QuestionType.FILL_IN_BLANK, questionText: "Ea_", correctAnswer: "r", explanation: "Ear: Tai." },
  { id: 56, type: QuestionType.MULTIPLE_CHOICE, questionText: "Clap your ___.", options: ["hands", "head", "hair", "hat"], correctAnswer: "hands", explanation: "Hands: Bàn tay." },
  { id: 57, type: QuestionType.FILL_IN_BLANK, questionText: "A_m", correctAnswer: "r", explanation: "Arm: Cánh tay." },
  { id: 58, type: QuestionType.MULTIPLE_CHOICE, questionText: "I have two ___.", options: ["legs", "lemon", "lamp", "long"], correctAnswer: "legs", explanation: "Legs: Chân." },
  { id: 59, type: QuestionType.FILL_IN_BLANK, questionText: "F_ot", correctAnswer: "o", explanation: "Foot: Bàn chân." },
  { id: 60, type: QuestionType.MULTIPLE_CHOICE, questionText: "One ___.", options: ["finger", "face", "five", "fish"], correctAnswer: "finger", explanation: "Finger: Ngón tay." },

  // --- PART 7: ANIMALS (61-70) ---
  { id: 61, type: QuestionType.FILL_IN_BLANK, questionText: "C_t", correctAnswer: "a", explanation: "Cat: Con mèo." },
  { id: 62, type: QuestionType.MULTIPLE_CHOICE, questionText: "I have a ___ (con chó).", options: ["dog", "doll", "duck", "desk"], correctAnswer: "dog", explanation: "Dog: Con chó." },
  { id: 63, type: QuestionType.FILL_IN_BLANK, questionText: "Bi_d", correctAnswer: "r", explanation: "Bird: Con chim." },
  { id: 64, type: QuestionType.MULTIPLE_CHOICE, questionText: "The ___ swims.", options: ["fish", "fan", "five", "four"], correctAnswer: "fish", explanation: "Fish: Con cá." },
  { id: 65, type: QuestionType.FILL_IN_BLANK, questionText: "P_g", correctAnswer: "i", explanation: "Pig: Con lợn." },
  { id: 66, type: QuestionType.MULTIPLE_CHOICE, questionText: "It is a ___ (con vịt).", options: ["duck", "dog", "desk", "dad"], correctAnswer: "duck", explanation: "Duck: Con vịt." },
  { id: 67, type: QuestionType.FILL_IN_BLANK, questionText: "Chi_ken", correctAnswer: "c", explanation: "Chicken: Con gà." },
  { id: 68, type: QuestionType.MULTIPLE_CHOICE, questionText: "The ___ likes bananas.", options: ["monkey", "mouse", "moon", "man"], correctAnswer: "monkey", explanation: "Monkey: Con khỉ." },
  { id: 69, type: QuestionType.FILL_IN_BLANK, questionText: "Ti_er", correctAnswer: "g", explanation: "Tiger: Con hổ." },
  { id: 70, type: QuestionType.MULTIPLE_CHOICE, questionText: "The ___ says 'Moo'.", options: ["cow", "cat", "car", "cap"], correctAnswer: "cow", explanation: "Cow: Con bò." },

  // --- PART 8: TOYS (71-80) ---
  { id: 71, type: QuestionType.FILL_IN_BLANK, questionText: "Ba_l", correctAnswer: "l", explanation: "Ball: Quả bóng." },
  { id: 72, type: QuestionType.MULTIPLE_CHOICE, questionText: "This is my ___ (búp bê).", options: ["doll", "dog", "door", "desk"], correctAnswer: "doll", explanation: "Doll: Búp bê." },
  { id: 73, type: QuestionType.FILL_IN_BLANK, questionText: "C_r", correctAnswer: "a", explanation: "Car: Ô tô đồ chơi." },
  { id: 74, type: QuestionType.MULTIPLE_CHOICE, questionText: "Fly a ___.", options: ["kite", "kit", "key", "king"], correctAnswer: "kite", explanation: "Kite: Cái diều." },
  { id: 75, type: QuestionType.FILL_IN_BLANK, questionText: "B_ke", correctAnswer: "i", explanation: "Bike: Xe đạp." },
  { id: 76, type: QuestionType.MULTIPLE_CHOICE, questionText: "I have a ___ (người máy).", options: ["robot", "rabbit", "ruler", "red"], correctAnswer: "robot", explanation: "Robot: Người máy." },
  { id: 77, type: QuestionType.FILL_IN_BLANK, questionText: "Tra_n", correctAnswer: "i", explanation: "Train: Tàu hỏa." },
  { id: 78, type: QuestionType.MULTIPLE_CHOICE, questionText: "Look at the ___.", options: ["plane", "plan", "plate", "play"], correctAnswer: "plane", explanation: "Plane: Máy bay." },
  { id: 79, type: QuestionType.FILL_IN_BLANK, questionText: "Boa_", correctAnswer: "t", explanation: "Boat: Thuyền." },
  { id: 80, type: QuestionType.MULTIPLE_CHOICE, questionText: "I like my ___ bear.", options: ["teddy", "ready", "tidy", "ten"], correctAnswer: "teddy", explanation: "Teddy bear: Gấu bông." },

  // --- PART 9: LISTENING - NUMBERS & COLORS (81-90) ---
  { id: 81, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen and choose the correct number.", audioScript: "Number Three", options: ["Five", "Three", "Ten", "One"], correctAnswer: "Three", explanation: "Bạn nghe thấy: 'Number Three' (Số 3)." },
  { id: 82, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen and choose the correct color.", audioScript: "The color is Blue", options: ["Green", "Red", "Blue", "Black"], correctAnswer: "Blue", explanation: "Bạn nghe thấy: 'The color is Blue' (Màu xanh dương)." },
  { id: 83, type: QuestionType.FILL_IN_BLANK, questionText: "Listen and write the number: O_e.", audioScript: "Number One", correctAnswer: "n", explanation: "Bạn nghe thấy: 'Number One' (Số 1)." },
  { id: 84, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen: What is this?", audioScript: "This is a Pencil", options: ["Pen", "Pencil", "Book", "Bag"], correctAnswer: "Pencil", explanation: "Bạn nghe thấy: 'This is a Pencil' (Đây là bút chì)." },
  { id: 85, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen: How are you?", audioScript: "I am fine", options: ["I'm fine", "I'm five", "I'm nine", "I'm nice"], correctAnswer: "I'm fine", explanation: "Bạn nghe thấy: 'I am fine' (Tôi khỏe)." },
  { id: 86, type: QuestionType.FILL_IN_BLANK, questionText: "Listen and complete: Hel_o.", audioScript: "Hello", correctAnswer: "l", explanation: "Bạn nghe thấy: 'Hello' (Xin chào)." },
  { id: 87, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen: Is it a dog?", audioScript: "Meow Meow. No, it isn't. It is a cat.", options: ["Yes, it is", "No, it isn't"], correctAnswer: "No, it isn't", explanation: "Bạn nghe thấy tiếng mèo kêu và câu 'No, it isn't'." },
  { id: 88, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen: What animal is it?", audioScript: "It is a Bird", options: ["Dog", "Cat", "Bird", "Duck"], correctAnswer: "Bird", explanation: "Bạn nghe thấy: 'It is a Bird' (Nó là con chim)." },
  { id: 89, type: QuestionType.FILL_IN_BLANK, questionText: "Listen: Stand _ _.", audioScript: "Stand up", correctAnswer: "up", explanation: "Bạn nghe thấy: 'Stand up' (Đứng dậy)." },
  { id: 90, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen and choose.", audioScript: "Open your book", options: ["Open your book", "Close your book", "Sit down", "Stand up"], correctAnswer: "Open your book", explanation: "Bạn nghe thấy: 'Open your book' (Mở sách ra)." },

  // --- PART 10: LISTENING - REVIEW (91-100) ---
  { id: 91, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen: Who is she?", audioScript: "She is my Teacher", options: ["Mother", "Sister", "Teacher", "Friend"], correctAnswer: "Teacher", explanation: "Bạn nghe thấy: 'She is my Teacher' (Cô ấy là giáo viên của tôi)." },
  { id: 92, type: QuestionType.FILL_IN_BLANK, questionText: "Listen: Goodb_e.", audioScript: "Goodbye", correctAnswer: "y", explanation: "Bạn nghe thấy: 'Goodbye' (Tạm biệt)." },
  { id: 93, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen: What is this?", audioScript: "It is a Robot", options: ["Ruler", "Rubber", "Robot", "Red"], correctAnswer: "Robot", explanation: "Bạn nghe thấy: 'It is a Robot' (Nó là người máy)." },
  { id: 94, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen: Touch your...", audioScript: "Touch your Nose", options: ["Nose", "Eye", "Ear", "Head"], correctAnswer: "Nose", explanation: "Bạn nghe thấy: 'Touch your Nose' (Chạm vào mũi)." },
  { id: 95, type: QuestionType.FILL_IN_BLANK, questionText: "Listen: Than_ you.", audioScript: "Thank you", correctAnswer: "k", explanation: "Bạn nghe thấy: 'Thank you' (Cảm ơn)." },
  { id: 96, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen: Is it big?", audioScript: "Yes, it is big", options: ["Yes, it is", "No, it isn't"], correctAnswer: "Yes, it is", explanation: "Bạn nghe thấy: 'Yes, it is big' (Có, nó to)." },
  { id: 97, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen: What colour is the bag?", audioScript: "The bag is Yellow", options: ["Yellow", "Red", "Green", "Blue"], correctAnswer: "Yellow", explanation: "Bạn nghe thấy: 'The bag is Yellow' (Cái cặp màu vàng)." },
  { id: 98, type: QuestionType.FILL_IN_BLANK, questionText: "Listen: Si_ down.", audioScript: "Sit down", correctAnswer: "t", explanation: "Bạn nghe thấy: 'Sit down' (Ngồi xuống)." },
  { id: 99, type: QuestionType.MULTIPLE_CHOICE, questionText: "Listen: How many books?", audioScript: "One, Two. Two books.", options: ["One", "Two", "Three", "Four"], correctAnswer: "Two", explanation: "Bạn nghe thấy đếm 'One, Two' (2 quyển sách)." },
  { id: 100, type: QuestionType.FILL_IN_BLANK, questionText: "Listen: B_e.", audioScript: "Bye bye", correctAnswer: "y", explanation: "Bạn nghe thấy: 'Bye bye' (Tạm biệt)." }
];