import Leaders from '@models/Leaders/leaders';

export default interface Competition {
  id: string;
  card: string;
  type: number;
  status: number;
  name: string;
  external: boolean;
  startTime: Date;
  endTime: Date;
  leaders: Leaders[];
  prize: Prize;
  myRank: number;
  targetScore: {};
  isOwner: boolean;
  isFavorite: boolean;
}

interface Prize {
  place: number;
  type: number;
  description: string;
  amount: string;
  tieBehavior: number;
}
