# `/now`
> A user comes here to casually perform the tests for their benefit

This page is for the user. And also for us to gauge our ideas / theories. User data is collected from all these tasks, akin to current web2 standards, ***after*** a cookie consent. Of course, our cookie categories may not be traditional (ie, necessary, performance, analytics), and we would explain them in way to convince them to accept. But that's it. About user identification, we can perhaps use differential privacy (i've always wanted to try to implement this) to gauge trends. May need to link data to users in some cases, but that can be another cookie category that users can opt-in.

The syncing and counting tasks are also sharable; ie, at the end of the task they can download an image with a summary, share to traditional platforms, or create NFTs* (* this should be for larger things because NFT spamming is never good).

## syncing heartbeat
> bring heartbeat into *awareness* using heart-detection tests

The script detects the heartbeat and starts displaying that as a beating heart. Periodically, it goes away for the user to continue the task. It comes back, optimally not in a periodic fashion (perhaps another A/B test here?), to guide the user until they are *in-sync* with their heartbeat. Or they can feel their heartbeat constantly since it is not in their *conscious awareness*. A way to detect such a state would be interesting.

## counting heartbeat
> counts beats per some interval and see accuracy

Here, there is a big timer displayed (where the user can also set the time, random otherwise), for the interval in which the user counts their heartbeat. After the interval, the counts are matched and accuracy given.

## meditate*
> as header. unsure how to implement.

Perhaps this should be its [own thing](../meditate/README.md) rather than hidden inside this page. In either case, unsure of how to implement this currently as this would likely also have to be breath involved. Can maybe do this over the Summer.

## buttons

Apart from the three [two?] actions above, this page also has two buttons which can lead the user off the page. Perhaps a thrid one (`account` on the bottom left) would make sense. But that would bring potential actions to six, dangerously close to the average seven things a human can keep in mind at a time.

- shuffle: lead the user to [`/rando`](../rando/README.md)
- home: as you'd expect
- user: see description in [`/index`](../../README.md#sketch-description)
