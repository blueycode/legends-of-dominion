interface ISkill {
  image: string;
  title: string;
  desc: string;
}

export default interface IJob {
  image: string;
  name: string;
  lore: string;
  skills: ISkill[];
}