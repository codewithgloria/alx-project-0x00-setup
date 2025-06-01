export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export interface PostData extends PostProps {}
export interface UserData extends UserProps {}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (post: PostData) => void;
}

export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (user: UserData) => void;
}

export interface PillProps {
  title: string;
}