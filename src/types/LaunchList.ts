export interface Launch {
  id?: string;
  mission_name: string;
  launch_date_utc: string;
  rocket: Rocket;
  links: Links;
}

export interface Launches {
  launchesPast: Launch[];
}

interface Rocket {
  rocket_name: string;
}

interface Links {
  article_link: string;
  video_link: string;
}