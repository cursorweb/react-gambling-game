import React, { createContext, useState } from "react";

export interface Profile {
    balance: number
}

export const defaultProfile: Profile = {
    balance: 500.0
};

interface ProfileManager {
    profile: Profile,
    changeBalance: (amt: number) => void
}

export const ProfileManagerContext = createContext<ProfileManager>(null as any);

export function ProfileContextProvider({ children }: React.PropsWithChildren) {
    const [profile, setProfile] = useState(defaultProfile);

    // TODO: something about loading from localstorage
    const value: ProfileManager = {
        profile,
        changeBalance(amt) {
            setProfile({ balance: profile.balance + amt });
        }
    };

    return (
        <ProfileManagerContext value={value}>
            {children}
        </ProfileManagerContext>
    );
}