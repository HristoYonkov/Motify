interface PlayerStore {
    id: string[];
    activated?: string;
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
}