export const en = {
  language: 'العربية',
  languageShort: 'ع',
  currency: '&#36;',
  appName: 'MuvRai',
  appNameSM: 'muvrai',
  appNameCAPS: 'MUVRAI',
  appAppr: 'MuvRai',
  appSlogan: 'Just TAP to connect with PPL',
  appAdmin: 'MuvRai Admin',
  appProfileURL: 'https://muvrai.app/profile/',
  appShortLink: 'https://muvrai.app/',
  appEditProfileURL: 'https://muvrai.app/cards',
  appActivationURL: 'https://muvrai.app/activationCode',
  appDomain: 'https://muvrai.app',
  appParentDomain: 'https://muvrai.com',
  appHowItWorks: 'https://muvrai.com/pages/how-it-works',
  appFeatures: 'https://muvrai.com/pages/muvrai-features',
  appfaq: 'https://muvrai.com/a/faq',
  learnFeatures: 'https://muvrai.com/pages/setup',
  login: 'Login',
  loading: 'loading...',
  processing: 'Processing...',
  authenticating: 'Authenticating...',
  getTheCard: 'Join MuvRai',
  prompt: {
    unsavedChanges: 'You have unsaved changes, are you sure you want to leave?',
  },
  files: {
    myConnections: 'my_MuvRai_connections',
    facebookCampaign: 'Facebook_campaign_MuvRai_connections',
    mailChimp: 'Mailchimp_MuvRai_connections',
    myFollowers: 'my_MuvRai_followers',
    myFollowings: 'my_MuvRai_followings',
    teamMemberConnections: '_MuvRai_connections',
    teamMemberFollowers: '_MuvRai_followers',
    teamMemberFollowing: '_MuvRai_following',
  },
  pages: {
    /* ...............................................Layout.................................................... */
    layout: {
      buttons: {
        closeInstallPWADialog: 'Close',
      },
      data: {
        titles: {
          install: 'Install MuvRai',
        },
        installPWA: {
          first: 'Add MuvRai to your homescreen for a better experience.',
          second: 'Requires 0 space and no permissions.',
          third: 'then "Add to Home Screen"',
        },
      },
    },

    /* ...............................................Onboarding.................................................... */
    onboarding: {
      messages: {
        loading: {
          loadingProfileData: 'Loading profile data...',
          updatingProfileData: 'Updating Profile Data...',
          analyzingImageFile: 'Analyzing image file...',
          replacingOldImage: 'Replacing previous image...',
          uploadingNewImage: 'Uploading new image...',
          loadingLinks: 'Loading links...',
        },
        info: {
          stepOne: {
            first: 'You can always add more information by editting your profile info later.',
          },
          stepThree: {
            first: 'You can always add and/sort social links, custom links or redirect your profile to any link of your choosing.',
          },
        },
        notifications: {
          profileUpdateSuccess: 'Profile updated successfully.',
          profileUpdateError: 'There was a problem updating profile data.',
          deleteLinkError: 'There was a problem deleting link.',
          addLinkError: 'There was a problem adding link.',
          savePrompt: 'You have unsaved changes, are you sure you want to leave?',
          onboardingError: 'There was a problem creating your MuvRai profile. Please reload and try again.',
        },
      },
      buttons: {
        nextStep: 'Next',
        prevStep: 'Previous',
        lastStep: 'Done',
        continueToProfile: 'Continue To Profile',
      },
      data: {
        titles: {
          welcome: 'Welcome on Board!',
          createProfile: {
            first: 'Lets\'s create your MuvRai profile in the next',
            second: 'steps.',
          },
          stepOne: '1.Restaurant info',
          stepTwo: '2.Restaurant logo',
          zoom: 'Zoom',
          rotate: 'Rotate',
          stepThree: '3.Restaurant links',
          stepFour: '4.Video',
          stepFive: '5.Restaurant profile design',
          selectLayout: 'Layout',
          basicLayout: 'Default',
          socialLayout: 'Social',
          businessLayout: 'Business',
          selectBackground: 'Theme',
          selectColor: 'Main color',
          addToHomeScreen: 'Add MuvRai to home screen',
          addToHomeScreenSubtitle: 'For better experience and instant updates.',
        },
        description: {
          stepOne: 'Information on your MuvRai profile and contact card.',
          stepTwo: 'Resturant logo on profile and contact card.',
          stepThree: 'Links on your MuvRai profile and contact card.',
          stepFour: 'Video displayed on your MuvRai profile and added as a link on your contact card.',
          stepFive: 'Create your basic MuvRai profile design.',
          addToHomeScreen: 'No space or permissions required. It is just a shortcut.',
        },
      },
      forms: {
        stepOne: {
          restaurantName: 'Restaurant Name',
          firstName: 'Restaurant Name',
          lastName: 'Last Name',
          email: 'Email',
          workPhone: 'Phone number',
          address: 'Address',
        },
        stepTwo: {
          picture: 'Restaurant logo',
        },
        stepThree: {
          website: 'Website',
          facebook: 'Facebook',
          instagram: 'Instagram',
          linkedIn: 'Linkedin',
          twitter: 'Twitter',
        },
      },
    },

    /* ...............................................Authentication.................................................... */
    auth: {
      messages: {
        loading: {
          authenticating: 'Authenticating...',
          validatingEmail: 'Validating E-mail...',
          findProfile: 'Searching profile...',
          connectprofile: 'Connecting profile...',
          connectprofileSuccess: 'Profile connected successfully',
          changingPassword: 'Changing password',
          loadingAuth: 'Loading Auth...',
        },
        notifications: {
          verificationSuccess: '<b>Your email address was successfully verified</b>',
          passwordChangeSuccess: 'Your password was successfully changed. You can continue using MuvRai.',
          emailRecoverSuccess: '<b>Your email was successfully changed</b>'
          + '<br />'
          + 'You can continue using MuvRai.',
          verificationFail: '<b>There was a problem verifying your email address.</b>'
          + '<br />'
          + 'Click the link below to resend verification email.',
          invitationCodeRequired: 'You need a MuvRai device to create an account.',
          invalidInvitationCode: 'Invalid code. The code entered is',
          wrongOldPassword: 'Your old password is wrong. Please try again.',
          wrongConfirmPassword: 'Password fields doesn\'t match',
          wrongChangeEmail: 'Something went wrong. Please try again.',
          sameAccountCode: 'Mirroring failed: Can\'t mirror same profile.',
          invalidCode: 'Mirroring failed: The secret code entered is invalid',
          mirrorDescription: 'Current profile will mirror (redirect to) the profile below',
          getMirrorProfileFail: 'Mirroring failed: An error occured during mirroring. Please try again.',
          currentlyConnected: 'Your MuvRai is now connected to the profile below.',
          clientOffline: 'Failed to load MuvRai because the device is offline.',
          emailVerifiedSuccess: 'Email verified successfully.',
          loginFail: 'There was a problem logging-in.',
          codeExpired: 'Validation code expired. Please repeat the process.',
          codeInvalid: 'Validation code is invalid. Please repeat the process.',
          noUser: 'No corresponding user. Please repeat the process.',
          passwordResetSuccess: 'Password rest success. Login using your new password.',
          CreateAccountFail: 'There was a problem creating an account.',
          emailDoesntExist: {
            title: 'Email Doesn\'t exist',
            body: 'The email entered doesn\'t have a Muvrai account.',
          },
          emailOnlyGoogle: {
            title: 'Wrong login method',
            body: 'The email entered has no related password and can only login using google.',
          },
          passwordChangeEmailSent: {
            title: 'A password change email is sent to your inbox.',
            body: 'Please follow the instruction in the email to change your password.',
          },
        },
        info: {
          connectProfile: {
            first: 'You are about to connect your MuvRai device to the account listed below.',
            second: 'Please note that once you accept to connect your device to this profile, this action cannot be undone.',
            doneTitle: 'Success!',
            done: 'Your MuvRai card is successfully connected.',
          },
          profileDeactivated: {
            userTitle: 'Profile deactivated',
            userFirst: 'You have deactivated your profile. It will remain invisible to visitors untill activated.',
            teamMemberTitle: 'Profile deactivated',
            teamMemberFirst: 'This profile is temporary deactivated by your team admin. Your profile will remain invisible to visitors untill activated.',
            visitorTitle: 'Profile inactive',
            visitorFirst: 'This profile is temporary deactivated by their owner.',
            masterTitle: 'Profile deactivated',
            masterFirst: 'You have deactivated the profile of this team member. Their profile will remain invisible to visitors untill activated.',
          },
        },
      },
      buttons: {
        resendVerificationEmail: 'Resend verification email',
        closeConfirmEmail: 'Close this message',
        enterInvitationCode: 'Enter invitation code',
        contactUs: 'Contact us',
        continueAfterConfirmation: 'Continue',
        continueAfterPasswordChange: 'Continue',
        changePassword: 'Confirm',
        signup: 'Create account',
        buyTappl: 'Buy MuvRai',
        connectToProfile: 'Multiple cards for a single profile? Click here.',
        forgotPassword: 'Forgot your password? Click here.',
        createAccount: 'Don\'t have a MuvRai account? Click here.',
        login: 'Already have an account. Login here.',
        getProfile: 'Find profile',
        connect: 'Connect',
        cancelConnect: 'Cancel connection',
        continueConnect: 'Continue',
        goToProfile: 'View profile',
        resetPasswordRequest: 'Continue',
        resetPasswordCancel: 'Cancel',
      },
      data: {
        titles: {
          signin: 'Welcome Back!',
          signup: 'New MuvRai Account',
          connect: 'Connect to existing profile',
          connectSubTitle: 'Login to the MuvRai profile you want to connect this card to.',
          connectSubTitleTwo: 'Click connect to confirm connection or cancel',
          connectSubTitleThree: 'Connection completed',
          connectInfo: 'When to use',
          connectWarning: 'Warning',
          verify: 'Verify your E-mail',
          changePassword: 'Reset password',
          changePasswordPage: 'Fill the form below to change your password',
          emailNotVerified: 'You Email is not verified',
          verifyEmail: 'Verify your Email address',
          authinticationError: 'Authentication Error',
          recoverEmail: 'Recover your email',
          signupWithEmail: 'Create account with email',
          landingAuth: 'Just TAP to connect with PPL',
          suspended: 'Suspended Profile',
          passwordError: 'Password error',
          passwordSuccess: 'Password changed successfully',
          forgotPasswordPanel: 'Reset password',
        },
        description: {
          loginPanel: 'Login using the same method you created your account.',
          signupPanel: 'Use one of the methods below to create a MuvRai account.',
          connectPanel: 'Connect this MuvRai card to an existing MuvRai account. This card will then work as a mirror to the connected account.',
          connectInfo: 'Connect to an exisiting profile if you want to use this MuvRai card as a secondary card for your existing MuvRai profile or as a replacement for a disposed or lost card.',
          connectWarning: 'Connecting to an existing profile is a one way action and can not be reversed. This card will always remain connected to the selected profile if you choose to do so.',
          changePassword: 'Write your new password then confirm',
          forgotPasswordPanel: 'Type your login email below to get the password reset instructions on your email.',
        },
        emailNotVerified: 'Please verify your email to continue using the app.',
        verifyEmail: 'A verification email has been sent to your email address. Please follow the instructions in the email to continue using the app.'
        + '<span>If you do not receive it within a few minutes, Please check your Junk, Bulk or spam folders.</span>',
      },
      forms: {
        accountSecret: 'Profile secret code',
        loginEmail: 'Your login email',
      },
    },

    /* ...............................................View Profile.................................................... */
    viewProfile: {
      messages: {
        loading: {
          loadingProfileData: 'Loading restaurant data...',
          loadingMenu: 'Populating menu items...',
          loadingOffers: 'Generating Offers...',
          connecting: 'Sending contact info...',
          validatingProfileKey: 'Validating Key...',
          sendingClaimRequest: 'Sending claim request...',
        },
        info: {
          inactiveVcard: 'Activate the "Add to Contact" button by editing your profile data.',
          connectDialog: 'Share your contact info with ',
          invalidPhone: 'Phone number is not valid.',
          passwordProtected: {
            first: 'Profile information are private. Enter the profile key below to reveal all information.',
            second: 'Enter the key below to reveal all information.',
          },
        },
        notifications: {
          connectSuccess: 'Contact info sent successfully.',
          connectError: 'There was a problem sending contact info.',
          sendingClaimSuccess: 'Request sent successfully.',
          sendingClaimError: 'There was aproblem sending your request.',
          claimRequestSent: {
            title: 'Your request is sent successfully',
            body: 'Our support team will contact you within the next 48h to confirm your request and help you further to complete your MuvRai account.',
          },
        },
        addToContacts: 'Add us to your phone contacts for easy access to our contacts, links, menu and offers.',
      },
      buttons: {
        addToContacts: 'Add to Contacts',
        connect: 'Connect',
        follow: 'Follow',
        unfollow: 'Unfollow',
        revealProtectedprofileInfo: 'Reveal Information',
        sendContactInfo: 'Send Contact Info',
        drawerText: 'Click for video and info',
        drawerTextNoVideo: 'Click for more info',
        sendClaimRequest: 'Send request',
        closeDialog: 'Close',
      },
      data: {
        titles: {
          privateProfile: 'Private profile',
          claimBusinessDialog: 'Claim restaurant profile',
          claimBusinessFormTitle: 'Fill in the form below and we will contact you within 48h',
        },
        userInfo: {
          firstName: 'First Name',
          middleName: 'Middle Name',
          lastName: 'Last Name',
          gender: 'Gender',
          nickname: 'Nickname',
          career: 'Industry',
          organization: 'Organization',
          title: 'Title',
          workPhone: 'Work Phone',
          email: 'Email',
          workFax: 'Work Fax',
          homePhone: 'Cell Phone',
          homeFax: 'Home Fax',
          birthday: 'Birthday',
        },
        placeholder: {
          title: 'No links',
          description: 'You did not add any links to your profile yet.',
          button: 'Click to add links',
        },
        videoPlaceholder: {
          title: 'No video',
          description: 'You did not add any video yet.',
          button: 'Click to add video',
        },
        offersPlaceholder: {
          title: 'No active offers',
          description: 'There are currently no active offers or specials.',
          button: 'Click to add offers',
        },
        menuPlaceholder: {
          title: 'No menu items',
          description: 'There are currently no active menu sections or items.',
          button: 'Click to create your menu',
        },
        privateProfileTitle: 'Private Profile',
      },
      forms: {
        connectDialog: {
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'E-mail',
          phone: 'Phone Number',
          website: 'Website',
          organization: 'Organization',
          jobTitle: 'Job Title',
          note: 'Note',
          agreement: 'I agree to receive email promotions from',
        },
        claimBusiness: {
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'E-mail',
          phone: 'Phone Number',
        },
      },
    },

    /* ...............................................Edit Profile.................................................... */
    editProfile: {
      messages: {
        loading: {
          loadingProfileData: 'Loading profile data...',
          updatingProfileData: 'Updating profile data...',
          loadingProfileInfo: 'Loading profile info...',
          updatingProfileInfo: 'Updating profile info...',
          loadingProfileContact: 'Loading contact info...',
          updatingProfileContact: 'Updating contact info...',
          loadingProfileBio: 'Loading video...',
          updatingProfileBio: 'Updating video...',
          loadingProfileLinks: 'Loading profile links...',
          deletingProfileLinks: 'Deleting link...',
          updatingProfileLinks: 'Updating profile links...',
          loadingProfilePicture: 'Loading profile picture...',
          updatingProfilePicture: 'Updating profile picture...',
          loadingLogo: 'Loading logo...',
          updatingLogo: 'Updating logo...',
          readingVcard: 'Reading V-card...',
          updatingVcard: 'Updating V-card...',
          updatingLinks: 'Updating links...',
          addingLink: 'Adding link...',
          redirectingProfile: 'Redirecting profile...',
          validatingLinks: 'Validating links...',
          sortingLinks: 'Sorting links...',
          analyzingImageFile: 'Analyzing image file...',
          replacingOldImage: 'Replacing previous image...',
          uploadingNewImage: 'Uploading new image...',
          loadingLinks: 'Loading links...',
          updatingTeamMember: {
            first: 'Updating team member',
            second: 'of',
          },
        },
        info: {
          links: {
            first: 'Add social links, custom links - or - redirect your card to any link.',
            second: 'Press and drag to sort the icons on your profile.',
            third: 'The number above each icon represents the number of visits for that link.',
            master: 'Changes will reflect on team members profiles.',
          },
          redirect: {
            first: 'Your MuvRai card will open to the selected link instead of your profile page.',
            second: 'Once selected and saved your MuvRai device will open to the selected link when scanned.',
            third: 'Deselect the redirect link and your MuvRai device will point to your MuvRai profile.',
            socialPanel: 'Click a link icon to select/deselect as a redirect destination.',
            customPanel: 'Click a link to select/deselect as a redirect destination',
          },
          bio: {
            first: 'Video displays on the bottom drawer of your profile page.',
            master: 'Changes will reflect on team members profiles.',
          },
          logo: {
            first: 'Logo Will show on the bottom drawer circle of your profile.',
            master: 'Changes will reflect on team members profiles.',
          },
          picture: {
            first: 'Banner image on your restaurant page.',
          },
          contact: {
            first: 'Contact information on your profile page and contact card.',
          },
          info: {
            first: 'General information on your restaurant page and contact card.',
            master: 'Organization and Industry fields will reflect on team members profiles.',
          },
        },
        notifications: {
          profileUpdateSuccess: 'Profile updated successfully.',
          profileUpdateError: 'There was a problem updating profile data.',
          profileInfoUpdateSuccess: 'Profile info updated successfully.',
          profileInfoUpdateError: 'There was a problem updating profile info.',
          profileContactUpdateSuccess: 'Contact info updated successfully.',
          profileContactUpdateError: 'There was a problem updating contact info.',
          profileBioUpdateSuccess: 'Video updated successfully.',
          profileBioUpdateError: 'There was a problem updating video.',
          profileLinksUpdateSuccess: 'Profile link added successfully.',
          profileLinksUpdateError: 'There was a problem adding link.',
          profileLinksSortSuccess: 'Profile links ordered successfully.',
          profileLinksSortError: 'There was a problem ordering profile links.',
          profileLinkDeletedSuccess: 'Profile link deleted successfully.',
          profileLinkDeletedError: 'There was a problem deleting links.',
          profilePictureUpdateSuccess: 'Profile picture updated successfully.',
          profilePictureUpdateError: 'There was a problem updating profile picture.',
          logoUpdateSuccess: 'Logo updated successfully.',
          logoUpdateError: 'There was a problem updating Logo.',
          deleteLinkError: 'There was a problem deleting link.',
          deleteLinkPrompt: 'Are you sure you want to delete this link?',
          addLinkError: 'There was a problem adding link.',
          savePrompt: 'You have unsaved changes, are you sure you want to leave?',
          enableRedirectPrompt: {
            first: 'Your MuvRai will automatically redirect to',
            second: 'Continue?',
          },
          disableRedirectPrompt: 'Disable redirect. Your MuvRai will point to your profile page. Continue?',
          noLogo: {
            title: 'No Existing logo',
            description: 'You need to add a logo first before changing the style.',
          },
          linkOrderChanged: {
            title: 'Link order changed',
            description: 'Please click on "Update links order" on the links panel to save the changes.',
          },
        },
      },
      buttons: {
        updateProfile: 'Update profile',
        addCustomLink: 'Add link',
        addMenuLink: 'Add menu link',
        updateBio: 'Update video',
        updateInfo: 'Update info',
        updatePicture: 'Update picture',
        updateLogo: 'Update logo',
        removeLogo: 'Remove',
        removeImage: 'Remove',
        updateContact: 'Update contact info',
        redirectProfile: 'Select a redirect link',
        updateLinks: 'Update links',
        saveSocialLink: 'Save link',
        saveCustomLink: 'Save link',
        saveMenuLink: 'Save link',
        updateLinksOrder: 'Update links order',
      },
      data: {
        titles: {
          page: 'Edit Profile',
          basicLinks: 'Social Links',
          redirectProfile: 'Select a Redirect link',
          socialRedirect: 'Social Redirect Links',
          customRedirect: 'Custom Redirect Links',
          customLinks: 'Custom Links',
          menuLinks: 'Menu Links',
          links: 'My Links',
          redirected: 'Your profile currently redirects to:',
          picture: 'My Picture',
          logo: 'My Logo',
          contact: 'My Contacts',
          info: 'My Info',
          bio: 'My Video',
          addCustomLink: 'Create link',
          addMenuLink: 'Create link',
          currentVideo: 'Current video',
          addVideo: 'Add video',
          addImage: 'Add image',
          currentImage: 'Current image',
          addLogo: 'Add logo',
          currentLogo: 'Current logo',
          logoStyle: 'Logo style',
          editContact: 'Contact info',
          editInfo: 'Basic info',
        },
        tabs: {
          info: 'Info',
          contact: 'Contact',
          picture: 'Picture',
          links: 'Links',
          addLinks: 'Add links',
          redirectProfile: 'Profile Redirect',
        },
        tags: {
          activateLink: 'Activate link',
          deactivateLink: 'Deactivate link',
        },
        tooltips: {
          redirect: 'Visitors of your profile will be redirect to this link.',
          redirectInactive: 'Activate link and add URL to enable.',
        },
        socialLinksPlaceholder: {
          title: 'No Social Links',
          description: 'You don\'t have any active social links at the moment.',
        },
        customLinksPlaceholder: {
          title: 'No Custom Links',
          description: 'You don\'t have any active custom links at the moment.',
        },
        description: {
          socialLinksPanel: 'Click to activate, add or edit links. Drag to sort link icons on your profile then click update order.',
          customLinksPanel: 'Add or remove custom links. Drag the handle to sort links on your profile then click update order.',
          menuLinksPanel: 'Add or remove menu links. Drag the handle to sort links on your profile then click update order.',
          logoPanel: 'Recommended: 150 x 150 image with a jpg or png format.',
          picturePanel: 'Recommended: 550 x 275 image with a jpg or png format.',
        },
      },
      forms: {
        infoTab: {
          restaurantName: 'Restaurant Name',
          firstName: 'Restaurant Name',
          middleName: 'Middle Name',
          lastName: 'Last Name',
          namePrefix: 'Prefix',
          nameSuffix: 'Suffix',
          gender: 'Gender',
          nickname: 'Nickname',
          career: 'Industry',
          organization: 'Organization',
          title: 'Job Title',
          birthday: 'Birthday',
          note: 'Note',
        },
        contactTab: {
          email: 'E-mail',
          workPhone: 'Work Phone',
          workFax: 'Work Fax',
          homePhone: 'Cell Phone',
          homeFax: 'Home Fax',
          address: 'Address',
        },
        pictureTab: {
          image: 'Image',
          logo: 'Logo',
        },
        socialLinks: {
          labelActive: 'PROFILE NAME',
          labelActiveUrl: 'YOUR URL',
          placeholder: 'Type your link',
          labelInactive: 'Activate to add/change link',
          disablled: 'Toggle to add/change link',
          defaultLinksToTheme: 'Use profile color as background',
          setAsProfileDefault: 'Set as profile default',
        },
        customLinks: {
          linkTitle: 'Link Title',
          link: 'Link URL',
        },
        menuLinks: {
          linkTitle: 'Link Title',
          link: 'Link URL',
        },
      },
    },

    /* ...............................................Offers.................................................... */
    offers: {
      messages: {
        loading: {
          loadingOffers: 'Loading offers...',
          removingOffer: 'Removing offer...',
          addingOffer: 'Adding offer...',
          loadingOffer: 'Loading offer...',
          sortingOffers: 'Sorting offers...',
          updatingOffer: 'Updating offer...',
          loadingOffersSettings: 'Loading settings...',
          updatingOffersSettings: 'Updating settings...',
          loadingTags: 'Loading tags...',
          addingTag: 'Adding tag...',
          removingTag: 'Removing tag...',
          sendingContactInfo: 'Sending info...',
          loadingConnectionInfo: 'Loading connection info...',
          updatingConnectionInfo: 'Updating connection info...',
          processingOfferRequest: 'Processing request...',
        },
        info: {
          general: {
            title: {
              first: 'Add up to',
              second: 'offers.',
            },
            first: 'Sort, View, edit or remove offers.',
          },
          noOffers: {
            title: 'You did\'t add any offers yet.',
            first: 'Start adding offers for an easier way to collect customr\'s contact data.',
          },
          settings: {
            title: 'Control offers on your profile',
          },
        },
        notifications: {
          savePrompt: 'You have unsaved changes, are you sure you want to leave?',
          offerMaxReached: 'You have added the maximum allowed offers. Remove an offer to add new or edit an existing offer.',
          deleteOfferSuccess: 'Offer removed successfully.',
          deleteOfferError: 'There was a problem removing offer.',
          deleteOfferPrompt: {
            first: 'Are you sure you want to delete',
            second: 'from offers?',
          },
          offerAddedSuccess: 'Offer added successfully.',
          offerAddedError: 'There was a problem adding offer.',
          connectSentSuccess: 'Contact info sent successfully.',
          connectSentError: 'There was a problem sending contact info.',
          connectionEditSuccess: 'Connection updated successfully.',
          connectionEditError: 'There was a problem updating connection.',
          offerPrivacy: 'We will not share or sell your information to any third party, and will only use it to send occasional email promotions.',
          offerClaimed: {
            title: 'Offer claimed successfully!',
            description: 'Show this page to the waitress to claim your offer.',
          },
          offerRestricted: {
            title: 'Already claimed an offer',
            description: 'You can only claim one offer per session.',
          },
          offersOrderChanged: {
            title: 'Offers order changed',
            description: 'Please click on "Update offers order" on the offers panel to save the changes.',
          },
          offersSortSuccess: 'Offers ordered successfully.',
          offersSortError: 'There was a problem ordering offers.',
          offersEditSuccess: 'Offer editted successfully.',
          offersEditError: 'There was a problem editting offer.',
          offersSettingsUpdateSuccess: 'Settings updated successfully.',
          offersSettingsUpdateError: 'There was a problem updating settings.',
          tagAddedSuccess: 'Tag added successfully.',
          tagAddedError: 'There was a problem adding tag.',
          tagDeletedSuccess: 'Tag removed successfully.',
          tagDeletedError: 'There was a problem removing tag.',
          deleteTagPrompt: {
            first: 'Are you sure you want to delete',
            second: 'from tags?',
            asigned: {
              first: 'is assigned to',
              second: 'connections',
              third: 'If removed you will not be able to filter connections using this tag. Contiue?',
            },
          },
          noTags: {
            title: 'No Tags',
            body: 'Start adding tags to assign to your offers and connections for easier classification in the future.',
          },
          tagExists: {
            first: 'Tag',
            second: 'Already exists',
          },
          processignOfferRequestError: 'There was a problem claiming offer.',
          addIncompleteOffer: {
            first: 'Your offer is missing the following important fields',
            second: ' ...Continue?',
          },
          emailRequiredError: {
            title: 'Email field is required',
          },
          emailValidError: {
            title: 'Email entered is invalid',
          },
          nameRequiredError: {
            title: 'First name field is required',
          },
        },
        oneOfferNote: 'You can only claim one offer',
        offerClaimNote: {
          first: 'This offer can be redeemed within',
          second: 'after it\'s claimed',
        },
      },
      buttons: {
        downloadCSV: 'Download as CSV',
        addOffer: 'Create Offer',
        extractData: 'Extract Contact Data from a Business Card Image',
        startReading: 'Start Reading',
        cancelReading: 'Cancel',
        addNewOffer: 'Create Offer',
        editOffer: 'Update Offer',
        sendContactInfo: 'Send Contact Info',
        editConnection: 'Edit Connection',
        getOffer: 'Claim',
        getOfferClaimed: 'Claimed',
        continueOffer: 'Claim',
        viewAllOffers: 'View All',
        hideAllOffers: 'Hide',
        updateOffersOrder: 'Update order',
        updateSettings: 'Update settings',
        addTag: 'Add New Tag',
        addTagShort: 'Add',
      },
      data: {
        titles: {
          page: 'My Offers',
          offerTags: 'Offer Tags',
          connectionNoteDialog: 'Note from',
          connect: 'Connect with me',
          panel: 'Offers list',
          offersPanel: 'Current Offers',
          offerTimeLeft: 'Claim Within',
          offersSettings: 'Offer Settings',
          settingsPanel: 'Settings',
          tagsPanel: 'Tags list',
          addOffer: {
            title: 'Create New Offer',
            subTitle: {
              first: '- or -',
              second: 'Fill in the form below',
            },
          },
          editOffer: {
            title: 'Edit Offer',
            subTitle: {
              first: '- or -',
              second: 'Fill in the form below',
            },
          },
          getOfferDialog: 'Claim offer',
          addTagDialog: 'Add Tag',
        },
        connectionInfo: {
          latestOfferClaimedOn: 'Latest Offer',
          offersCount: {
            first: 'Claimed',
            second: 'Offers',
          },
          addedOn: 'Added on',
          name: 'Name',
          tags: 'Tags',
          firstName: 'First Name',
          lastName: 'Last Name',
          organization: 'Organization',
          title: 'Job Title',
          workPhone: 'Work Phone',
          website: 'Website',
          email: 'Email',
          note: 'Note',
        },
        tabs: {
          info: 'Offer Info',
          price: 'Offer Price',
          image: 'Offer Image',
          controls: 'Offer Controls',
          tags: 'Offer Tags',
        },
        description: {
          priceTap: 'Add old price and new price and/or discount percentage',
          imageTap: 'Recommended: 550 x 275 image with a jpg or png format.',
          imageCropper: 'Pinch/Scroll to zoom',
          controlsTap: 'Selecte start date, end date and/or offer limit.',
          getOfferDialog: 'Fill in the form below to claim this offer.',
          tagsPanel: 'Add or remove tags.',
          offerTags: 'Create tags to classify your offers and clients.',
          tagsTab: 'Add and/or Assign tags for better analytics results.',
        },
        timer: {
          days: 'D',
          day: 'D',
          hours: 'H',
          hour: 'H',
          minutes: 'M',
          minute: 'M',
          seconds: 'S',
          second: 'S',
        },
        dueOffersPlaceholder: {
          title: 'No active offers',
          description: 'There are currently no active offers.',
        },
      },
      forms: {
        searchOffers: 'Search name, email or phone number',
        addOfferDialog: {
          offerActive: 'Active',
          offerClaimable: 'Claimable',
          image: 'Offer image',
          title: 'Title',
          description: 'Description',
          tagLine: 'Tag line',
          startDate: 'Starts',
          endDate: 'Ends',
          onlyOn: 'Only on',
          limit: 'Limit',
          oldPrice: 'Original price',
          newPrice: 'New price',
          discount: 'Discount',
          tags: 'Tags',
          help: {
            tagLine: 'A small line under description',
            oldPrice: 'Only numbers',
            newPrice: 'Only numbers',
            discount: 'Only numbers',
            limit: 'Maximum claims on offer',
          },
        },
        settings: {
          title: 'Offers panel title',
          titleHelp: 'Offers panel title on your profile.',
          terms: 'Offer terms',
          termsHelp: 'Disclaimer below offer form.',
          message: 'Claimed message',
          messageHelp: 'Message after client claims an offer.',
          currency: 'Currency',
          currencyHelp: 'Currency used on offer pricing. Will also affect menu items currency.',
          time: 'Offer window',
          timeHelp: 'Number of hours before client can claim another offer.',
          tags: 'Offer tags',
        },
        addTagDialog: {
          tag: 'Add new tag',
        },
      },
    },

    /* ...............................................Edit Menu.................................................... */
    editMenu: {
      messages: {
        loading: {
          loadingMenuData: 'Loading menu data...',
          updatingMenuData: 'Updating menu data...',
          loadingMenuSettings: 'Loading settings...',
          updatingMenuSettings: 'Updating settings...',
          addingSection: 'Adding section...',
          addingTitle: 'Adding title...',
          updatingSection: 'Updating section...',
          updatingTitle: 'Updating title...',
          removingSection: 'Removing section...',
          addingItem: 'Adding item...',
          updatingItem: 'Updating item...',
          removingItem: 'Removing item...',
          updatingMenu: 'Updating menu...',
          loadingTags: 'Loading warning labels...',
          addingTag: 'Adding tag...',
          removingTag: 'Removing tag...',
        },
        notifications: {
          savePrompt: 'You have unsaved changes, are you sure you want to leave?',
          titleAddedSuccess: 'Title added successfully.',
          titleAddedError: 'There was a problem adding title.',
          titleEdittedSuccess: 'Title editted successfully.',
          titleEdittedError: 'There was a problem editting title.',
          sectionAddedSuccess: 'Section added successfully.',
          sectionAddedError: 'There was a problem adding section.',
          sectionUpdateSuccess: 'Section updated successfully.',
          sectionUpdateError: 'There was a problem updating section.',
          sectionRemoveSuccess: 'Section removed successfully.',
          sectionRemoveError: 'There was a problem removing section.',
          itemAddedSuccess: 'Item added successfully.',
          itemAddedError: 'There was a problem adding item.',
          itemUpdateSuccess: 'Item updated successfully.',
          itemUpdateError: 'There was a problem updating item.',
          itemRemoveSuccess: 'Item removed successfully.',
          itemRemoveError: 'There was a problem removing item.',
          menuUpdateSuccess: 'Menu updated successfully.',
          menuUpdateError: 'There was a problem updating menu.',
          deleteMenuPrompt: {
            first: 'Are you sure you want to delete',
            second: 'from menu?',
          },
          sectionsOrderChanged: {
            title: 'Sections order changed',
            description: 'Please click on "Update Menu" to save the changes.',
          },
          itemsOrderChanged: {
            title: 'Items order changed',
            description: 'Please click on "Update Menu" to save the changes.',
          },
          tagAddedSuccess: 'Label added successfully.',
          tagAddedError: 'There was a problem adding label.',
          tagDeletedSuccess: 'Label removed successfully.',
          tagDeletedError: 'There was a problem removing tag.',
          deleteTagPrompt: {
            first: 'Are you sure you want to delete',
            second: 'from warning labels?',
            asigned: {
              first: 'is assigned to',
              second: 'connections',
              third: 'If removed you will not be able to filter connections using this tag. Contiue?',
            },
          },
          noTags: {
            title: 'No warning labels',
            body: 'Start adding ingredient warning labels to attract clients to menu items and help filter your menu.',
          },
          tagExists: {
            first: 'Label',
            second: 'Already exists',
          },
          menuSettingsUpdateSuccess: 'Settings updated successfully.',
          menuSettingsUpdateError: 'There was a problem updating settings.',
          menuSettingsLoadError: 'There was a problem loading menu settings.',
          menuFilterError: 'There was a problem filtering menu items.',
          menuLoadError: 'There was a problem loading menu items.',
          addIncompleteItem: {
            first: 'Your item is missing the following important fields: ',
            second: ' ...Continue?',
          },
          noPrice: {
            title: 'No available prices',
            description: 'There are no prices added to menu items. The price filter option will not show to your clients.',
          },
          noIngredients: {
            title: 'No available ingredients',
            description: 'There are no ingredients added to menu items. The ingredients filter option will not show to your clients.',
          },
          noTagsUsed: {
            title: 'No dietary restrictions used',
            description: 'There are no dietary restrictions used on any menu items. The diet filter option will not show to your clients.',
          },
        },
        info: {
          noSections: {
            title: 'You don\'t have any sections yet.',
            first: 'Start adding sections via "Add Section" button.',
          },
          noItems: {
            title: 'You don\'t have any items yet.',
            first: 'Start adding items via "Add Item" button.',
          },
          menu: {
            first: 'General information on your restaurant menu.',
            master: 'Master confirmed',
          },
          settings: {
            title: 'Control menu on your profile',
          },
        },
      },
      data: {
        titles: {
          page: 'Edit Menu',
          restaurantMenu: 'Restaurant Menu',
          editTitle: {
            title: 'Edit Menu Title',
          },
          addTitle: {
            title: 'Add Menu Title',
          },
          addSection: {
            title: 'Add Menu Section',
          },
          editSection: {
            title: 'Edit',
          },
          addItem: {
            title: 'Add Menu Item',
          },
          editItem: {
            title: 'Edit Item',
          },
          filterMenu: {
            title: 'Menu Filter',
          },
          menu: 'Menu',
          menuTags: 'Dietary Restrictions',
          tagsPanel: 'Dietary restriction list',
          addTagDialog: 'Add Label',
          menuPanel: 'Our Menu',
          menuSettings: 'Menu Settings',
          settingsPanel: 'Settings',
        },
        tabs: {
          info: 'Info',
          image: 'Image',
          link: 'Link',
          title: 'Menu title',
          price: 'Price Options',
          ingredients: 'Ingredients',
          filterMenu: 'Filter menu',
          filterPrice: 'By price',
          filterIngredients: 'By ingredients',
          filterTags: 'By diet',
          tags: 'Dietary Restriction',
        },
        description: {
          imageTap: 'Recommended: 550 x 275 image with a jpg or png format.',
          menuPanel: 'Add, edit or remove sections and items. Drag the handle to sort sections in the menu or items in their section.',
          imageCropper: 'Pinch/Scroll to zoom',
          tagsPanel: 'Add or remove warning labels.',
          menuTags: {
            first: 'Dietary restriction labels that inform people about a menu item.',
            second: 'Dietary restriction labels will show on menu items and used as filter.',
          },
          tagsTab: 'Assign restriction labels for easier menu filtering.',
          priceTab: 'Add single or multiple prices.',
        },
      },
      buttons: {
        updateMenu: 'Update menu',
        addTitle: 'Add title',
        addSection: 'Add section',
        updateSection: 'Update section',
        updateTitle: 'Update title',
        addItem: 'Add item',
        updateItem: 'Update item',
        addTag: 'Add New Label',
        addTagShort: 'Add',
        filterMenu: 'Filter',
        revertFilterMenu: 'Clear filter',
        updateSettings: 'Update settings',
        addContainerSection: 'With menu items',
        addLinkSections: 'As external link',
        removeImage: 'Remove',
      },
      forms: {
        addSectionDialog: {
          sectionActive: 'Active',
          image: 'Section image',
          title: 'Title',
          subtitle: 'Sub title',
          description: 'Description',
          note: 'Note',
          link: 'Link',
        },
        addItemDialog: {
          itemActive: 'Active',
          itemSoldout: 'Soldout',
          title: 'Title',
          description: 'Description',
          note: 'Note',
          image: 'Item image',
          priceUnit: 'Price unit',
          priceUnitHelp: 'Ex: Sml, Med, Lg.',
          price: 'Price',
          section: 'Section',
          preparationTime: 'Preparation time',
          discount: 'Discount',
          ingredients: 'Write an ingredient and click "Enter / return" to add',
          tags: 'Tags',
        },
        addTagDialog: {
          tag: 'Add new label',
        },
        filterMenuDialog: {
          withIngredients: 'With ingredients',
          withoutIngredients: 'Without ingredients',
          menuIngredients: 'Menu ingredients',
          priceDescription: 'Slide to the maximum price required',
          ingredientsDescription: 'Select menu items with or without certain ingredients',
          tagsDescription: 'Select menu items with dietary restrictions',
        },
        settings: {
          title: 'Menu panel title',
          titleHelp: 'Menu panel title on your profile.',
          currency: 'Currency',
          currencyHelp: 'Currency used on menu items pricing. Will also affect offers currency.',
          minPrice: 'Minimum price',
          minPriceHelp: 'Minimum price when filtering menu items.',
          maxPrice: 'Maximum price',
          maxPriceHelp: 'Maximum price when filtering menu items.',
        },
      },
    },

    /* ...............................................Connections.................................................... */
    connections: {
      messages: {
        loading: {
          loadingConnections: 'Loading connections...',
          removingConnection: 'Removing connection...',
          addingConnection: 'Adding connection...',
          sendingContactInfo: 'Sending info...',
          loadingConnectionInfo: 'Loading connection info...',
          updatingConnectionInfo: 'Updating connection info...',
        },
        info: {
          general: {
            title: 'Customer\'s data collected through offers.',
            first: 'View, remove or download connections.',
          },
          noConnections: {
            title: 'You don\'t have any connections yet.',
            first: 'Adding offers to your restaurant page to collect connections data.',
            grid: 'No matching connections',
          },
          ocrCropperActive: {
            first: 'Keep only the business card area within the boundries of the cropper for better results',
          },
          ocrActive: {
            first: 'Select a high resolution business card image to extract contact info from.',
          },
          ocrDoneSuccess: {
            title: 'Card scanning is finished successfully',
            first: 'Please fill in the mandatory fields (*) to add a new contact.',
            second: 'Click any chip to change the value of the related field.',
          },
          ocrDoneFail: {
            title: 'Could not read data from scanned image',
            first: 'Make sure the image uploaded is on high resolution.',
            second: 'Use the zoom and rotate to focus on the data section of the image.',
          },
        },
        notifications: {
          downloadVcardError: 'There was a problem downloading card file.',
          deleteConnectionSuccess: 'Connection removed successfully.',
          deleteConnectionError: 'There was a problem removing connection.',
          deleteConnectionPrompt: {
            first: 'Are you sure you want to delete',
            second: 'from connections?',
          },
          connectAddedSuccess: 'Connection added successfully.',
          connectAddedError: 'There was a problem adding connection.',
          connectSentSuccess: 'Contact info sent successfully.',
          connectSentError: 'There was a problem sending contact info.',
          connectionEditSuccess: 'Connection updated successfully.',
          connectionEditError: 'There was a problem updating connection.',
        },
      },
      buttons: {
        download: 'Download',
        downloadCSV: 'Email contacts CSV',
        downloadFacebookCSV: 'Facebook campaign CSV',
        downloadMailchimpCSV: 'Mailchimp contacts CSV',
        addConnection: 'Add Connection',
        extractData: 'Extract Contact Data from a Business Card Image',
        startReading: 'Start Reading',
        cancelReading: 'Cancel',
        addNewContact: 'Add Connection',
        sendContactInfo: 'Send Contact Info',
        editConnection: 'Edit Connection',
        advancedSearch: 'Search',
        advancedSearchClear: 'Reset',
      },
      data: {
        titles: {
          page: 'My Connections',
          connectionNoteDialog: 'Note from',
          connect: 'Connect with me',
          panel: 'Connections list',
          addConnection: {
            title: 'Add New Connection',
            subTitle: {
              first: '- or -',
              second: 'Fill in the form below',
            },
          },
        },
        connectionInfo: {
          latestOfferClaimedOn: 'Latest Offer',
          offersCount: {
            first: 'Claimed',
            second: 'Offers',
          },
          addedOn: 'Added on',
          name: 'Name',
          tags: 'Tags',
          firstName: 'First Name',
          lastName: 'Last Name',
          organization: 'Organization',
          title: 'Job Title',
          workPhone: 'Phone',
          website: 'Website',
          email: 'Email',
          note: 'Note',
        },
      },
      forms: {
        searchConnections: 'Search name, email or phone number',
        advancedSearch: {
          startDate: 'Last claimed from:',
          endDate: 'To:',
          tags: 'With tags:',
        },
      },
    },

    /* ...............................................Followings.................................................... */
    followings: {
      messages: {
        loading: {
          loadingFollowings: 'Loading followings...',
          removingFollowing: 'Removing following...',
        },
        info: {
          general: {
            title: 'MuvRai profiles you are following',
            first: 'View, add to phone contacts or unfollow MuvRai profiles.',
          },
          noFollowings: {
            title: 'You don\'t have any followings yet.',
            first: 'Follow MuvRai users by visiting thier profile to get their updated info and add to your phone contacts.',
          },
        },
        notifications: {
          addFollowingSuccess: 'You are now following',
          addFollowingError: 'There was a problem following user.',
          removeFollowingSuccess: 'You have successfully unfollowed',
          removeFollowingError: 'There was a problem unfollowing user.',
          downloadVcardError: 'There was a problem downloading card file.',
          deleteFollowingPrompt: 'Are you sure you want to unfollow this profile?',
        },
      },
      buttons: {
        downloadCSV: 'Download as CSV',
      },
      data: {
        titles: {
          page: 'I\'m Following',
          panel: 'Followings list',
        },
      },
      forms: {
        searchFollowings: 'Search name, email or phone number',
      },
    },

    /* ...............................................Followers.................................................... */
    followers: {
      messages: {
        loading: {
          loadingFollowers: 'Loading followers...',
          removingFollower: 'Removing follower...',
        },
        info: {
          general: {
            title: 'MuvRai users following your profile',
            first: 'View, add to phone contacts or remove MuvRai followers.',
          },
          noFollowers: {
            title: 'You don\'t have any followers yet.',
            first: 'MuvRai users can istantly follow your profile and keep updated with your latest info.',
          },
        },
        notifications: {
          addFollowerSuccess: 'You are now follower',
          addFollowerError: 'There was a problem following user.',
          removeFollowerSuccess: 'You have successfully unfollowed',
          removeFollowerError: 'There was a problem unfollowing user.',
          downloadVcardError: 'There was a problem downloading card file.',
          deleteFollowerPrompt: 'Are you sure you want to delete follower?',
        },
      },
      buttons: {
        downloadCSV: 'Download as CSV',
      },
      data: {
        titles: {
          page: 'My Followers',
          panel: 'Followers list',
        },
      },
      forms: {
        searchFollowers: 'Search name, email or phone number',
      },
    },

    /* ...............................................My Team.................................................... */
    myTeam: {
      messages: {
        loading: {
          loadingTeamMembers: 'Loading team members...',
          loadingAnalytics: 'Generating report...',
          processing: 'Processing...',
        },
        info: {
          general: {
            title: 'Manage your team members.',
            first: 'View  analytics, connections, followers, followings or deactivate team member profiles.',
          },
          noTeamMembers: {
            title: 'You don\'t have any team members yet.',
            first: 'You will see a list of your team members once their MuvRai devices is activated.',
          },
          noMemberConnections: {
            title: 'No connections',
            first: 'doesn\'t have any connections yet.',
          },
          noMemberFollowers: {
            title: 'No followers',
            first: 'doesn\'t have any MuvRai followers yet.',
          },
          noMemberFollowing: {
            title: 'No followings',
            first: 'isn\'t following any MuvRai users.',
          },
          inactiveProfile: {
            tooltip: 'Inactive profile',
          },
        },
        notifications: {
          downloadVcardError: 'There was a problem downloading card file.',
          activateProfileSuccess: 'Profile activated successfully.',
          deactivateProfileSuccess: 'Profile deactivated successfully.',
          activateProfileError: 'There was a problem activating profile.',
          deactivateProfileError: 'There was a problem deactivating profile.',
          confirmDeactivate: 'Are you sure you want to deactivate this team member profile?',
        },
      },
      buttons: {
        downloadCSV: 'Download as CSV',
        teamMemberAnalytics: 'Analytics',
        teamMemberConnections: 'View Connections',
        teamMemberFollowers: 'View Followers',
        teamMemberFollowing: 'View Following',
        viewProfile: 'View Profile',
        teamReport: 'Team Analytics',
        deactivateProfile: 'Deactivate Profile',
        activateProfile: 'Activate Profile',
      },
      data: {
        titles: {
          page: 'My Team',
          memberConnectionsDialog: 'Connections',
          memberFollowersDialog: 'Followers',
          memberFollowingDialog: 'Following',
          memberAnalyticsDialog: 'Analytics',
          panel: 'Team members',
          memberConnectionsPanel: 'Connections list',
          memberFollowersPanel: 'Followers list',
          memberFollowingPanel: 'Followings list',
        },
      },
      forms: {
        searchTeamMembers: 'Search name, email or phone number',
      },
    },

    /* ...............................................userInvitations.................................................... */
    userInvitations: {
      messages: {
        loading: {
          loadingInvitations: 'Loading invitations...',
          loadingUserData: 'Loading data...',
        },
        info: {
          general: {
            first: 'Use or share the invitation codes to create different profiles for your MuvRai devices.',
            second: 'Once an invitation code is used you can track the created profile activity.',
          },
          share: {
            title: 'Invitation to create a MuvRai account',
            body: 'Use the activation code below to create your MuvRai account and connect it to your MuvRai device.\n\nActivation Code: ',
          },
        },
        notifications: {
          loadUserDataError: 'There was a problem loading user data.',
          invitationCodeCopiedSuccess: 'Invitation code copied successfully.',
        },
      },
      buttons: {
        visitProfile: 'Visit Profile',
        copyInvitationLink: 'Copy Invitation Link',
        shareInvitationLink: 'Share Invitation Link',
        inviteeInfo: 'Invitee info',
      },
      data: {
        titles: {
          page: 'Invitations',
          invitationDetailsDialog: 'Account information for: ',
          shareInvitationCodeDialog: 'Share invitation code',
        },
        labels: {
          usedInvitation: 'Used',
          availableInvitation: 'Available',
          yourInvitation: 'Your account invitation',
        },
        userInfo: {
          email: 'E-mail',
          created: 'Created on',
          lastLogin: 'Last Login',
          addedToContacts: 'Added to contacts',
          connections: 'Connections',
        },
      },
    },

    /* ...............................................AdminInvitations.................................................... */
    invitations: {
      messages: {
        loading: {
          loadingInvitations: 'Loading invitations...',
          creatingInvitations: 'Creating invitation...',
        },
        notifications: {
          disableInvitationSuccess: 'Invitation disabled successfully.',
          disableInvitationError: 'Action failed :(',
          deleteInvitationSuccess: 'Invitation deleted successfully.',
          deleteInvitationError: 'Action failed :(',
          createInvitationSuccess: 'Invitation created successfully.',
          createInvitationError: 'There was a problem creating new invitation.',
        },
      },
      buttons: {
        generateInvitationCode: 'Generate an invitation code',
        createNewInvitation: 'Create invitation',
      },
      data: {
        titles: {
          page: 'Invitations',
          createNewInvitation: 'Create new invitation',
        },
      },
      forms: {
        invitationPackages: 'Package',
      },
    },

    /* ...............................................Orders.................................................... */
    orders: {
      messages: {
        loading: {
          loadingOrders: 'Loading orders...',
        },
        notifications: {
          deleteOrderSuccess: 'Order deleted successfully.',
          deleteOrderError: 'Action failed :(',
        },
      },
      data: {
        titles: {
          page: 'Orders',
        },
      },
    },

    /* ...............................................Invitation Code.................................................... */
    invitationCode: {
      messages: {
        notifications: {
          invitationCodeSuccess: 'Invitation code is valid click Next to start creating your account.',
          invitationCodeError: 'Invalid code. The code entered is',
          autoCodeSuccess: 'You are eligible to create a MuvRai account. Click the button below to start.',
          autoCodeError: 'The activation used is ',
          invalidCodeAdvice: 'Use another activation link or visit our store to choose your own MuvRai.',
        },
        loading: {
          validatingInvitation: 'Analyzing MuvRai...',
          loadingProfile: 'Loading profile data...',
        },
      },
      buttons: {
        nextStep: 'Next',
        activate: 'Activate',
        createAccount: 'Create my account',
        visitStore: 'Visit MuvRai store',
      },
      data: {
        titles: {
          page: 'Activation code',
          enterInvitationCode: 'Enter your activation code to create a MuvRai account',
          invitationCodeSuccess: 'Congratulations!',
          invitationCodeError: 'Link is not valid.',
        },
      },
      forms: {
        invitationCode: 'Invitation Code',
      },
    },

    /* ...............................................Landing.................................................... */
    landing: {
      messages: {
        loading: {
          auth: 'Authenticating...',
        },
      },
      buttons: {
        enterInvitationCode: 'Enter Activation Code',
        login: 'Login',
        store: 'Join MuvRai',
        join: 'Join Muvrai',
        learnMore: 'Learn More',
        howItWorks: 'How it works',
        features: 'Features',
        faq: 'FAQs',
      },
      data: {
        titles: {
          page: 'Just TAP to connect with PPL',
          subtitle: 'Exchange information in seconds with your clients.',
        },
      },
    },

    /* ...............................................Connect Tappl.................................................... */
    connectTappl: {
      messages: {
        loading: {
          loadingQrCode: 'Loading Qr code...',
        },
        info: {
          general: {
            first: 'Save your QR code to use the in <b>Prints</b>, <b>Web pages</b> or <b>Mobile scanning</b>.',
          },
        },
        notifications: {
          urlCopiedSuccess: 'Profile URL copied successfully.',
        },
      },
      buttons: {
        copyUrl: 'Copy my profile link',
        login: 'Login',
      },
      data: {
        titles: {
          page: 'Connect MuvRai',
          subTitle: 'Follow the steps below to connect your MuvRai device to your profile.',
        },
        steps: {
          first: {
            title: 'Copy your profile link',
            descriptionLoggedIn: 'Click the button to copy your profile link.',
            descriptionLoggedOut: 'Login to show and copy your profile link. ',
          },
          second: {
            title: 'Download the activation app',
            description: 'Click the store version matching your phone operating system.',
          },
          third: {
            title: 'Start writing',
            description: 'Open the NFC app and click on “Write”.',
          },
          fourth: {
            title: 'Add Record',
            description: 'Click on “Add Record”.',
          },
          fifth: {
            title: 'URL option',
            description: 'Click “URL option” (second from the top).',
          },
          sixth: {
            title: 'Past your profile link',
            description: 'Paste your link by holding your finger on the text area and click paste then click “ok”.',
          },
          seventh: {
            title: 'Connect',
            description: 'Click write and hold your MuvRai product near the top of your iPhone or the middle of your Android device.',
          },
          eighth: {
            title: 'Confirm',
            description: 'Once you see the checkmark, your profile is now connected to your MuvRai product.',
          },
        },
      },
    },

    /* ...............................................QR Code.................................................... */
    qrCode: {
      messages: {
        loading: {
          loadingQrCode: 'Loading Qr code...',
        },
        info: {
          general: {
            first: 'Save your QR code to use for <b>Printings</b>, <b>Web pages</b> or <b>Scanning</b>.',
          },
        },
        notifications: {
          invitationCodeSuccess: 'Invitation code is valid click Next to start creating your account.',
          invitationCodeError: 'Invalid code. The code entered is',
        },
      },
      buttons: {
        saveAsPng: 'Save as PNG',
        saveAsSvg: 'Save as SVG',
      },
      data: {
        titles: {
          page: 'QR Code',
        },
      },
    },

    /* ...............................................Share Profile.................................................... */
    shareProfile: {
      messages: {
        loading: {
          loadingShareOptions: 'Loading share options...',
        },
        info: {
          defaultShareMessageTitle: 'Add my contact details via MuvRai Cards',
          defaultShareMessageBody: 'Click the link to view menu and offers from',
          general: {
            first: 'Write your message then select your preferred platform.',
          },
          profileLink: {
            first: 'Click the copy button to copy your profile url to the clipboard.',
          },
          share: {
            first: 'Copy your profile page URL or share on different platforms',
          },
        },
        notifications: {
          urlCopiedSuccess: 'Profile URL copied successfully.',
        },
      },
      buttons: {
        copyUrl: 'Copy to Clipboard',
      },
      data: {
        titles: {
          page: 'Share profile',
          profileLink: 'Profile URL',
          shareProfile: 'Profile share',
        },
      },
      forms: {
        shareMessage: 'Share message',
      },
    },

    /* ...............................................Account Secret.................................................... */
    accountSecret: {
      messages: {
        loading: {
          loadingAccountData: 'Loading account data...',
        },
        info: {
          general: {
            first: 'Use the code below to connect a new MuvRai device to this profile.',
            second: 'Once used the connected device will point to this profile.',
          },
        },
        notifications: {
          codeCopiedSuccess: 'Account code copied successfully.',
        },
      },
      buttons: {
        copyCode: 'Copy code to Clipboard',
      },
      data: {
        titles: {
          page: 'Profile code',
        },
      },
    },

    /* ...............................................Profile Mirror.................................................... */
    profileMirror: {
      messages: {
        loading: {
          loadingMirror: 'Loading...',
        },
        info: {
          general: {
            first: 'Use this MuvRai profile as mirror to another MuvRai profile.',
            second: 'Once mirrored this profile will point to the profile of the seceret code entered.',
            third: 'You can unmirror this profile at anytime to use as seprate profile.',
          },
        },
        notifications: {
          sameAccountCode: 'Mirroring failed: Can\'t mirror same profile.',
          invalidCode: 'Mirroring failed: The secret code entered is invalid',
          mirrorDescription: 'You are about to connect your MuvRai device to the account listed below.',
          getMirrorProfileFail: 'Mirroring failed: An error occured during mirroring. Please try again.',
        },
      },
      buttons: {
        mirrorProfile: 'Mirror',
      },
      data: {
        titles: {
          page: 'Profile mirror',
          profileLink: 'Profile page URL',
          shareProfile: 'Share your Profile',
        },
      },
      forms: {
        accountSecret: 'Profile code',
      },
    },

    /* ...............................................Patches.................................................... */
    patches: {
      messages: {
        loading: {
          constructingSearch: 'Constructing search elements...',
        },
        notifications: {
          sendingEmailFail: 'There was a problem sending email',
          sendingEmailSuccess: 'Email sent successfully',
          changingAccountFail: 'There was a problem changing user account activity',
          userActivated: 'User activated successfully',
          userDeactivated: 'User deactivated successfully',
          deleteUSerFail: 'There was a problem deleting user',
        },
      },
      buttons: {
        createNewPatch: 'Create new patch',
      },
      data: {
        titles: {
          page: 'Patches',
        },
      },
    },

    /* ...............................................Users.................................................... */
    users: {
      messages: {
        loading: {
          sendingWelcomeEmail: 'Sending welcome email...',
          constructingSearch: 'Constructing search elements...',
        },
      },
      buttons: {
        createNewUser: 'Create new user',
      },
      data: {
        titles: {
          page: 'Users',
        },
      },
    },

    /* ...............................................Welcome.................................................... */
    welcome: {
      buttons: {
        nextStep: 'Next',
        prevStep: 'Back',
        start: 'Start Now',
      },
      data: {
        steps: {
          first: {
            title: 'The easiest way to share your contacts.',
            description: 'All your contact data on one page, added to phones with one click.',
          },
          second: {
            title: 'Start by adding your information.',
            description: 'Edit your profile with your recent contact information to activate the &apos;Add to contact&apos; button on your profile.',
          },
          third: {
            title: 'Add and sort your links.',
            description: 'Add your social and/or custom links and sort it with the order you prefer on your profile.',
          },
          fourth: {
            title: 'Share your profile.',
            description: 'With one click you can email your profile or share it on social platforms.',
          },
          fifth: {
            title: 'Customize your profile.',
            description: 'Switch between dark and light theme and change the main color of your profile.',
          },
          sixth: {
            title: 'Change your password or login email at anytime.',
            description: 'It is very recommended that you change your default password.',
          },
        },
      },
    },

    /* ...............................................Analytics.................................................... */
    analytics: {
      messages: {
        loading: {
          loadingAnalytics: 'Generating report...',
        },
        info: {
          general: {
            first: 'A quick overview of your profile activity.',
          },
        },
        notifications: {
          urlCopiedSuccess: 'Profile URL copied successfully.',
          noLinks: {
            title: 'No active links',
            description: 'There are no active links in your profile. Start adding links to tack thier activity.',
          },
          noTags: {
            title: 'No active tags',
            description: 'There are no added tags in your offers. Start adding tags to tack thier activity.',
          },
        },
      },
      buttons: {
        viewConnections: 'View connections',
        viewFollowings: 'View followings',
        viewFollowers: 'View followers',
        viewLinks: 'View links',
        viewTags: 'View tags',
      },
      data: {
        titles: {
          page: 'My Analytics',
          addedToContacts: 'Added to contacts',
          connections: 'Connections',
          visits: 'Profile visists',
          followers: 'Followers',
          followings: 'Followings',
          links: 'Links',
          tags: 'Tags',
        },
        description: {
          addedToContacts: 'Number of times added to phone contacts',
          connections: 'Number of connections',
          visits: 'Number of profile visits',
          followers: 'Number of MuvRai followers',
          followings: 'Number of MuvRai followings',
          linksPanel: 'Clicks count on each link',
          tagsPanel: 'Claim count on each tag',
        },
      },
      forms: {
        shareMessage: 'Share message',
      },
    },

    /* ...............................................Settings.................................................... */
    settings: {
      messages: {
        loading: {
          loadingSettings: 'Loading settings...',
          savingSettings: 'Saving settings...',
          updatingLayout: 'Updating layout...',
          updatingTheme: 'Updating theme...',
          loadingKey: 'Loading Privacy data...',
          savingKey: 'Saving key data...',
          verifyEmailRequest: 'Sending verification Email...',
          passwordChangeRequest: 'Processing...',
          emailChangeRequest: 'Sending email change request...',
          loadingAccounData: 'Loading account data...',
          processing: 'Processing...',
          updatingTeamMember: {
            first: 'Updating team member',
            second: 'of',
          },
          manageSubscription: 'Redirecting to Stripe...',
        },
        info: {
          account: {
            first: 'Subscription and login details.',
            second: 'An email verification is required before you can change your email or password.',
          },
          privacy: {
            first: 'Create a key to reveal your profile information or deactivate your profile.',
            second: 'Name and picture will always remain active.',
          },
          theme: {
            first: 'Control layout and colors of your profile page.',
            master: 'Changes will reflect on team members profiles.',
          },
        },
        notifications: {
          settingsSavedSuccess: 'Settings saved successfully.',
          settingsSavedError: 'There was a problem saving settings.',
          keySavedSuccess: 'Profile key saved successfully.',
          keySavedError: 'There was a problem saving profile key.',
          verificationEmailSentSuccess: 'Verification Email sent.',
          verificationEmailSentError: 'Problem sending verification Email. Please try again.',
          passwordChangeEmailSent: {
            title: 'A password change email is sent to your inbox.',
            body: 'Please follow the instruction in the email to change your password.',
          },
          passwordChanged: {
            title: 'Password changed successfully.',
            body: 'Log out then log back in to confirm the change.',
          },
          passwordChangedError: {
            title: 'Wrong old password.',
            body: 'Entered "Current password" is wrong. Please try again.',
          },
          samePasswordError: {
            title: 'Same password used.',
            body: 'Your new password can not equal your current password. Please try again.',
          },
          passwordChangeEmailSentSuccess: 'Change password email sent.',
          passwordChangeEmailSentError: 'There was a problem sending email. Please try again.',
          passwordChangeSuccess: 'Password changed successfully.',
          passwordChangeError: 'There was a problem changing password. Please try again.',
          emailChangeEmailSent: {
            title: 'Email changed.',
            body: 'Your email is changed successfully. A verification email is sent to your new login email, it is recommended that you verify your new email to be able to make changes in the future.',
          },
          emailChangeEmailSentSuccess: 'Change login email sent.',
          emailChangeEmailSentError: 'There was a problem sending email. Please try again.',
          savePrompt: 'You have unsaved changes, are you sure you want to leave?',
          wrongCurrentEmail: {
            title: 'Wrong email',
            body: 'Wrong current login email. Please enter the Current logged in email.',
          },
          activateProfileSuccess: 'Profile activated successfully.',
          deactivateProfileSuccess: 'Profile deactivated successfully.',
          activateProfileError: 'There was a problem activating profile.',
          deactivateProfileError: 'There was a problem deactivating profile.',
          confirmDeactivate: 'Are you sure you want to deactivate your profile?',
        },
      },
      buttons: {
        saveSettings: 'Save Settings',
        verifyEmail: 'Verify email',
        changePassword: 'Change',
        changeEmailRequest: 'Change',
        changeEmailCancel: 'Cancel',
        changeEmail: 'Change',
        changePasswordRequest: 'Change',
        changePasswordCancel: 'Cancel',
        basicStyleTheme: 'Default',
        businessStyleTheme: 'Business',
        socialStyleTheme: 'Social',
        lightTheme: 'Light',
        darkTheme: 'Dark',
        savePrivacy: 'Save',
        saveTheme: 'Update theme',
        colorPicker: 'Pick my color',
        deactivateProfile: 'Deactivate',
        activateProfile: 'Activate',
        manageSubscription: 'Manage',
      },
      data: {
        titles: {
          page: 'Settings',
          accountTab: 'Change your Email & Password',
          subscription: 'Subscription',
          changePassword: 'Change Your Password',
          changeEmail: 'Change Your Login Email',
          infoEmail: 'Your Login Email',
          changeEmailSubtitle: 'Type in your current Email and new Email to continue',
          privacyTab: 'Profile Key',
          themeTab: 'MuvRai Theme',
          profileLayout: 'Profile Layout',
          defaultTheme: 'Profile Theme',
          defaultColor: 'Profile Color',
          defaultColorSubtitle: 'Select From Swatches',
          defaultColorSubtitleTwo: '- Or - Pick Your Own',
          iconsColor: 'Icons Color',
          theme: 'Profile Design',
          privacy: 'Profile Privacy',
          profileKey: 'Profile Key',
          deactivateProfile: 'Deactivate profile',
          account: 'My Account',
          verifyEmailDialog: 'Verify your Email address',
          password: 'Password',
          loginEmail: 'Login Email',
        },
        description: {
          passwordPanel: 'Change your login password.',
          emailPanel: 'Change your login email.',
          emailPanelGoogle: 'Your login email.',
          profileKey: 'When activated, the key will be required to reveal information on your profile while your name and picture will always remain visible.',
          deactivateProfilePanel: 'When deactivated, all information will be hidden on your MuvRai profile and Visitors will see a deactivated message.',
          subscriptionPanel: 'Manage your Muvrai subscription',
          subscriptionRenews: 'Your subscription renews on:',
          subscriptionEnds: 'Your subscription renews on:',
          trialEnds: 'Your trial period ends on:',
        },
        tabs: {
          theme: 'Theme',
          account: 'Account',
          privacy: 'Privacy',
        },
        placeholders: {
          verifyEmail: {
            title: 'Email address is not verified',
            description: 'Verify your email address and don\'t risk losing your account.',
            button: 'Verify Email',
          },
          verifyEmailSent: {
            title: 'Verification Email sent',
            description: 'A verification Email is sent to your inbox. Please follow the instruction in the email to complete the process.',
          },
        },
        dialog: {
          verifyEmail: {
            notVerified: 'You need to verify your email address before changing your email or password.',
            emailSent: 'A verification Email is sent to your inbox. Please follow the instruction in the email to complete the process.',
          },
        },
        tooltips: {
          emailVerified: 'Email verified',
          emailUnverified: 'Email not verified',
        },
      },
      forms: {
        currentEmail: 'Current login E-mail',
        newEmail: 'New login E-mail',
        currentPassword: 'Current login password',
        newPassword: 'New login password',
        profilePassword: 'Profile Key',
        profileKeySwitchOn: 'Turn on profile key',
        profileKeySwitchOff: 'Turn off profile key',
        socialLinks: {
          defaultLinksToTheme: 'Use profile color as social links background.',
        },
      },
    },
  },

  footer: {
    buttons: {
      privacy: 'Privacy Policy',
      contact: 'Contact',
    },
  },

  cookieBar: {
    message: 'MuvRai uses cookies to enhance the user experience.',
    link: 'Privacy policy',
    button: 'Agree',
  },

  navLinks: {
    homePage: 'Home',
    profile: 'My Profile',
    editProfile: 'Edit Profile',
    share: 'Profile Share',
    qrcode: 'Profile QR Code',
    analytics: 'My Analytics',
    connections: 'My Connections',
    offers: 'My Offers',
    offersSettings: 'Settings',
    offerTags: 'Tags',
    followings: 'I\'m Following',
    followers: 'My Followers',
    invitations: 'My Invitations',
    settings: 'Settings',
    connect: 'Connect MuvRai',
    logout: 'Logout',
    authintication: 'Sign-in',
    info: 'Info',
    contact: 'Contacts',
    picture: 'Picture',
    logo: 'Logo',
    bio: 'Video',
    links: 'Links',
    theme: 'Design',
    privacy: 'Profle Privacy',
    account: 'My Account',
    myTeam: 'My Team',
    secretCode: 'Profile code',
    menu: 'My Menu',
    menuSettings: 'Settings',
    menuTags: 'Dietary Restriction',
  },

  userLinks: {
    invitationsAdmin: 'Invitations',
    orders: 'Orders',
    logout: 'Logout',
    users: 'Users',
  },

  suits: {
    all: 'All',
    admin: 'admin',
    invitation: 'invitation',
  },

  meta: {
    title: 'MuvRai',
    description: 'Create, update and share your contact information and allow peaople an easy access to your public information with one click.',
  },

  fonts: {
    cardTitle: {
      family: 'Playfair Display',
    },
  },
}
