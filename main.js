class ZehefPoopy {
	constructor() {
		this.isPoopyZehefed = false
		this.poopyContainer = document.getElementById( 'poopy-container' )
		this.poopyImg = document.getElementById( 'poopy-img' )
		this.initEventsListener()
	}

	initEventsListener() {
		this.poopyContainer.addEventListener( 'pointerdown', this.zehefPoopy.bind( this ) )

	}

	zehefPoopy() {
		if ( this.isPoopyZehefed ) {
			this.fartSound()
			return
		}
		const shitSong = document.getElementById( 'shit-song' )
		shitSong.play()
		this.poopyContainer.style.backgroundImage = 'url("assets/img/fire.gif")'
		this.poopyContainer.style.backgroundRepeat = 'no-repeat'
		this.poopyContainer.style.backgroundSize = 'cover'
		this.poopyImg.src = "assets/img/zehef-poopy.gif"
		document.querySelector( 'h1' ).innerText = 'ZEHEF POOPY'
		document.getElementById( 'poopy-click-notice' ).remove()
		this.isPoopyZehefed = true
	}

	fartSound() {
		const fartSong = document.getElementById( 'fart-song' )
		fartSong.play()
	}
}

new ZehefPoopy()