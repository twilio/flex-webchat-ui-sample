const brandColor1 = "#1976d2";
const brandColor2 = "#233659";
const brandTextColor = "#ffffff";

const personalizedColors = {
   darkBlueBackground: "#3C425C",
   whiteText: "#FFFFFF",
   entryPointBackground: "#3C425C",
   lighterBackground: "#ecedf1",
   primaryButtonBackground: "#1976d2",
   primaryButtonColor: "#FFFFFF",
   secondaryButtonBackground: "#6e7180",
   secondaryButtonColor: "#FFFFFF"
};

const brandMessageBubbleColors = (bgColor) => ({
    Bubble: {
        background: bgColor,
        color: brandTextColor
    },
    Avatar: {
        background: bgColor,
        color: brandTextColor
    },
    Header: {
        color: brandTextColor
    }
});

const brandedColors = {
    Chat: {
        MessageListItem: {
            FromOthers: brandMessageBubbleColors(brandColor2),
            FromMe: brandMessageBubbleColors(brandColor1),
        },
        MessageInput: {
            Button: {
                background: brandColor1,
                color: brandTextColor
            }
        },
        MessageCanvasTray: {
            Container: {
                background: personalizedColors.darkBlueBackground,
                color: personalizedColors.whiteText
            }
        },
    },

    MainHeader: {
        Container: {
            background: personalizedColors.darkBlueBackground,
            color: personalizedColors.whiteText
        },
        Logo: {
            fill: brandTextColor
        }
    },

    EntryPoint: {
        Container: {
            background: personalizedColors.entryPointBackground,
            color: personalizedColors.whiteText
        }
    },

    PreEngagementCanvas: {
        Container: {
            background: personalizedColors.lighterBackground
        },

        Form: {
            SubmitButton: {
                background: personalizedColors.primaryButtonBackground,
                color: personalizedColors.whiteText
            }
        }
    }
};
