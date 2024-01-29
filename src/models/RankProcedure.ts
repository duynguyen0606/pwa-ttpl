class RankProcedureModel {
  id_help_articles: string;
  divide: string;
  title: string;
  result: string;
  url_key: string;
  co_quan_thuc_hien: string;

  constructor(args: any) {
    this.id_help_articles = args.id_help_articles ?? '';
    this.title = args.title ?? '';
    this.url_key = args.url_key ?? '';
    this.divide = args.divide ?? '';
    this.result = args.result ?? '';
    this.co_quan_thuc_hien = args.co_quan_thuc_hien ?? '';
  }
}

export default RankProcedureModel;
