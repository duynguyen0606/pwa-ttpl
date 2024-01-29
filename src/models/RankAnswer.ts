class RankQaModel {
  id_answer: string;
  divide: string;
  count_answer: string;
  answer: string;
  question_id: string;
  created_by_answer: string;
  created_at_answer: string;
  title_question: string;
  question: string;
  created_at_question: string;
  create_by_question: string;
  id_type_faq: string;
  title_type_faq: string;
  image_question: string;
  image_answer: string;
  full_name_answer: string;
  full_name_question: string;

  constructor(args: any) {
    this.id_answer = args.id_answer ?? '';
    this.count_answer = args.count_answer ?? '';
    this.answer = args.answer ?? '';
    this.divide = args.divide ?? '';
    this.question_id = args.question_id ?? '';
    this.created_by_answer = args.created_by_answer ?? '';
    this.created_at_answer = args.created_at_answer ?? '';
    this.title_question = args.title_question ?? '';
    this.question = args.question ?? '';
    this.created_at_question = args.created_at_question ?? '';
    this.create_by_question = args.create_by_question ?? '';
    this.id_type_faq = args.id_type_faq ?? '';
    this.title_type_faq = args.title_type_faq ?? '';
    this.image_question = args.image_question ?? '';
    this.image_answer = args.image_answer ?? '';
    this.full_name_answer = args.full_name_answer ?? '';
    this.full_name_question = args.full_name_question ?? '';
  }
}

export default RankQaModel;
