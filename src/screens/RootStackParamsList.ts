import { RouteProp } from "@react-navigation/core";
import { Member } from "./directory/types";

export type ScreensParamsList = {
    Directory: undefined;
    List: undefined;
    Detail: {
        member: Member
    };
};

export type ScreenRouteProps<RouteName extends keyof ScreensParamsList> = 
    RouteProp<ScreensParamsList, RouteName>;