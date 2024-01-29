class BussinessModel {
  id_lawyer: string;
  divide: string;
  full_name: string;
  user_type: string;
  address: string;
  uuid: string;
  point: string;
  image: string;
  id: string;

  constructor(args: any) {
    this.id_lawyer = args.id_lawyer ?? '';
    this.divide = args.divide ?? '';
    this.full_name = args.full_name ?? '';
    this.user_type = args.user_type ?? '';
    this.address = args.address ?? '';
    this.uuid = args.uuid ?? '';
    this.point = args.point ?? '';
    this.image = args.image ?? '';
    this.id = args.id ?? '';
  }
}

export default BussinessModel;
