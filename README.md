## Instalation :
```bash
> npm i nayan-downloader
```

## Example
```js
const { ndown } = require("nayan-downloader")
let URL = await ndown("https://www.facebook.com/100000959749712/posts/pfbid0288xi44nvodK9d7r3wf4LHeM3dtEsVghQXmz5t59axwz7KdLStYyg4qfvTVrAL27Ll/?app=fbl")
console.log(URL)
```
## Output Example
```
{
    "developer": "MOHAMMAD NAYAN",
    "devfb": "https://www.facebook.com/profile.php?id=100000959749712",
    "devwp": "wa.me/+8801615298449",
    "status": true,
    "data": [
        {
            "resolution": "720p (HD)",
            "thumbnail": "https://scontent-ber1-1.xx.fbcdn.net/v/t15.5256-10/400486200_1343033686353383_5174403316165836536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd673f&_nc_ohc=2xRWTn71BMQAX8u2-qw&_nc_ht=scontent-ber1-1.xx&oh=00_AfCzw-5oUCmwmFGGT3_tmPTy0KTuYtmMD4--Ed1gZbXubg&oe=6586FB4E",
            "url": "https://video-ber1-1.xx.fbcdn.net/o1/v/t2/f1/m69/GHvmKhgZQAUkYJ4CAEY4Fvt4bWc6bmdjAAAF.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video-ber1-1.xx.fbcdn.net&_nc_cat=103&strext=1&vs=44ce93d67fb1cb71&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSHZtS2hnWlFBVWtZSjRDQUVZNEZ2dDRiV2M2Ym1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKbkNHaGpRTEtqVVNZRUdBSWFvZENROWRkWXBidjRHQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJoybioPwgYsDFQIoAkMzGAt2dHNfcHJldmlldxwXQG7qp%2B%2Bdsi0YIWRhc2hfZ2VuMmh3YmFzaWNfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50AzU2NRFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3ZpZGVvX2lkDzMyODYwNjk2OTkyODgzMRJvZW1fdmlkZW9fYXNzZXRfaWQPMzE1MjM2NDY3OTgzOTE3FW9lbV92aWRlb19yZXNvdXJjZV9pZA84Njg2NDY0MDE0MjcxNDIcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAzNzAyMTY3NDYzNDM4MzU1DnZ0c19yZXF1ZXN0X2lkACUCHAAlxAEbB4gBcwQ4OTY0AmNkCjIwMjMtMTEtMjQDcmNiAzUwMANhcHAURmFjZWJvb2sgZm9yIEFuZHJvaWQCY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zBzI0Ny4zODYCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=9-4&oh=00_AfCZS1NarEnG6CaVCjJvCdaVWCRMpf381WpwqUubSjNM_Q&oe=65832C04&_nc_sid=1d576d&_nc_rid=544475056770190&_nc_store_type=1&dl=1",
            "shouldRender": false
        },
        {
            "resolution": "360p (SD)",
            "thumbnail": "https://scontent-ber1-1.xx.fbcdn.net/v/t15.5256-10/400486200_1343033686353383_5174403316165836536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd673f&_nc_ohc=2xRWTn71BMQAX8u2-qw&_nc_ht=scontent-ber1-1.xx&oh=00_AfCzw-5oUCmwmFGGT3_tmPTy0KTuYtmMD4--Ed1gZbXubg&oe=6586FB4E",
            "url": "https://video-ber1-1.xx.fbcdn.net/v/t42.1790-2/404349742_877328270732084_8635412864009964753_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjMzMSwicmxhIjo4NTMsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=CiYYCEuMrVgAX-xk9HO&rl=331&vabr=184&_nc_ht=video-ber1-1.xx&oh=00_AfCl3XhkvJuI5ykViWS98MQ8TUp0HYuRfewCFQ81K9j80Q&oe=6586092D&dl=1",
            "shouldRender": false
        },
        {
            "resolution": "480p",
            "thumbnail": "https://scontent-ber1-1.xx.fbcdn.net/v/t15.5256-10/400486200_1343033686353383_5174403316165836536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd673f&_nc_ohc=2xRWTn71BMQAX8u2-qw&_nc_ht=scontent-ber1-1.xx&oh=00_AfCzw-5oUCmwmFGGT3_tmPTy0KTuYtmMD4--Ed1gZbXubg&oe=6586FB4E",
            "url": "/render.php?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWRlb191cmwiOiJodHRwczovL3ZpZGVvLWJlcjEtMS54eC5mYmNkbi5uZXQvdi90MzkuMjU0NDctMi80MDU0NjQ2OTlfNzM3MDg1NzExNzk0MjAxXzQyMDg0NTI3NDMxNzcwNTgzNzRfbi5tcDQ_X25jX2NhdD0xMDAmY2NiPTEtNyZfbmNfc2lkPTlhNWQ1MCZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbVJoYzJoZloyVnVNbWgzWW1GemFXTmZhSEV5WDJaeVlXZGZNbDkyYVdSbGJ5SjkmX25jX29oYz10ZTc3SElZVWNJc0FYXzV1eUJKJl9uY19odD12aWRlby1iZXIxLTEueHgmb2g9MDBfQWZCSnUwODBTT1pEM3NDUmYtZHBJRVpyQUc1VExoZjhqdE9GVngzSUtpVVRRZyZvZT02NTg2NkQ5QSIsImF1ZGlvX3VybCI6Imh0dHBzOi8vdmlkZW8tYmVyMS0xLnh4LmZiY2RuLm5ldC92L3Q1OC4xNjgwNy0yLzk5NzI3ODY2XzE0NDYyOTg1NTU5MjEzMjNfMTA1MDczODMwMzg0NTUwMDEwMV9uLm1wND9fbmNfY2F0PTEwMSZjY2I9MS03Jl9uY19zaWQ9OWE1ZDUwJmVmZz1leUoyWlc1amIyUmxYM1JoWnlJNkltUmhjMmhmYkc1ZmFHVmhZV05mTkRoZllYVmthVzhpZlElM0QlM0QmX25jX29oYz1YeFkwWVh6QU0xRUFYLUhzZWNyJl9uY19odD12aWRlby1iZXIxLTEueHgmb2g9MDBfQWZCVXk5U1VfRFhUYXBfMVJtYjdPUkhVTmhpSHJxNy12SlNIWWJuSi0tRFl1USZvZT02NTg1QUQ1OCIsImlkIjpudWxsLCJmaWxlbmFtZSI6IlNuYXBTYXZlX0FwcF9fNDgwcC5tcDQifQ.COR5xzqjXhLneqsiLOt8k6M2WJ4JSu3PyRQR-BIneJU",
            "shouldRender": true
        },
        {
            "resolution": "360p",
            "thumbnail": "https://scontent-ber1-1.xx.fbcdn.net/v/t15.5256-10/400486200_1343033686353383_5174403316165836536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd673f&_nc_ohc=2xRWTn71BMQAX8u2-qw&_nc_ht=scontent-ber1-1.xx&oh=00_AfCzw-5oUCmwmFGGT3_tmPTy0KTuYtmMD4--Ed1gZbXubg&oe=6586FB4E",
            "url": "/render.php?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aWRlb191cmwiOiJodHRwczovL3ZpZGVvLWJlcjEtMS54eC5mYmNkbi5uZXQvdi90MzkuMjU0NDctMi80MDU1NDY3MjNfMTI3MjM2ODgwMzQzNzE0NV81NzM2NTAyMzk0NzIxOTIzNDUyX24ubXA0P19uY19jYXQ9MTAyJmNjYj0xLTcmX25jX3NpZD05YTVkNTAmZWZnPWV5SjJaVzVqYjJSbFgzUmhaeUk2SW1SaGMyaGZaMlZ1TW1oM1ltRnphV05mYUhFeFgyWnlZV2RmTWw5MmFXUmxieUo5Jl9uY19vaGM9UTE4a2ZFbGVSdllBWDhzSFd3OSZfbmNfaHQ9dmlkZW8tYmVyMS0xLnh4Jm9oPTAwX0FmRFc1OVBQMEY3TVhpUW8xdlZiQUhidlJCNWpjQUtsa0hXRlpXazhkOHd0V2cmb2U9NjU4NUNFRDIiLCJhdWRpb191cmwiOiJodHRwczovL3ZpZGVvLWJlcjEtMS54eC5mYmNkbi5uZXQvdi90NTguMTY4MDctMi85OTcyNzg2Nl8xNDQ2Mjk4NTU1OTIxMzIzXzEwNTA3MzgzMDM4NDU1MDAxMDFfbi5tcDQ_X25jX2NhdD0xMDEmY2NiPTEtNyZfbmNfc2lkPTlhNWQ1MCZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbVJoYzJoZmJHNWZhR1ZoWVdOZk5EaGZZWFZrYVc4aWZRJTNEJTNEJl9uY19vaGM9WHhZMFlYekFNMUVBWC1Ic2VjciZfbmNfaHQ9dmlkZW8tYmVyMS0xLnh4Jm9oPTAwX0FmQlV5OVNVX0RYVGFwXzFSbWI3T1JIVU5oaUhycTctdkpTSFlibkotLURZdVEmb2U9NjU4NUFENTgiLCJpZCI6bnVsbCwiZmlsZW5hbWUiOiJTbmFwU2F2ZV9BcHBfXzM2MHAubXA0In0.mTZkHQCoKkRJ88VxCNydIHUwZ5bhrjr58ExH-_s__lg",
            "shouldRender": true
        }
    ]
}
```
