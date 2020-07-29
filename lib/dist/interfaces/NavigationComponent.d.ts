import React from 'react';
import { NavigationButtonPressedEvent, ModalDismissedEvent, ModalAttemptedToDismissEvent, SearchBarUpdatedEvent, SearchBarCancelPressedEvent, PreviewCompletedEvent, ScreenPoppedEvent, ComponentDidAppearEvent, ComponentDidDisappearEvent } from './ComponentEvents';
import { NavigationComponentProps } from './NavigationComponentProps';
import { Options } from './Options';
export declare class NavigationComponent<Props = {}, State = {}, Snapshot = any> extends React.Component<Props & NavigationComponentProps, State, Snapshot> {
    static options?: (() => Options) | Options;
    componentDidAppear(_event: ComponentDidAppearEvent): void;
    componentDidDisappear(_event: ComponentDidDisappearEvent): void;
    navigationButtonPressed(_event: NavigationButtonPressedEvent): void;
    modalDismissed(_event: ModalDismissedEvent): void;
    modalAttemptedToDismiss(_event: ModalAttemptedToDismissEvent): void;
    searchBarUpdated(_event: SearchBarUpdatedEvent): void;
    searchBarCancelPressed(_event: SearchBarCancelPressedEvent): void;
    previewCompleted(_event: PreviewCompletedEvent): void;
    screenPopped(_event: ScreenPoppedEvent): void;
}
