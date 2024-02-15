class DetailProcedureLevel2Model {
  id: string;
  name: string;
  address: string;
  phone_number: string;
  email: string;
  created_at: string;
  updated_at: string;
  agency_amount: string;
  crawl_id: string;
  location: string;
  tinh: string;
  huyen: string;
  xa: string;
  type: string;
  version: string;
  deleted: string;
  avatar: string;

  constructor(args: any) {
    this.id = args.id ?? '';
    this.name = args.name ?? '';
    this.address = args.address ?? '';
    this.phone_number = args.phone_number ?? '';
    this.email = args.email ?? '';
    this.created_at = args.created_at ?? '';
    this.updated_at = args.updated_at ?? '';
    this.agency_amount = args.agency_amount ?? '';
    this.crawl_id = args.crawl_id ?? '';
    this.location = args.location ?? '';
    this.tinh = args.tinh ?? '';
    this.huyen = args.huyen ?? '';
    this.xa = args.xa ?? '';
    this.type = args.type ?? '';
    this.version = args.version ?? '';
    this.deleted = args.deleted ?? '';
    this.avatar = args.avatar ?? '';
  }
}

export default DetailProcedureLevel2Model;
