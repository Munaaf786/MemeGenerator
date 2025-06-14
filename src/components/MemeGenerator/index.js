import {Component} from 'react'

import {
  App,
  MemeGeneratorContainer,
  Heading,
  MemeAndFormContainer,
  MemeContainer,
  TextContent,
  MemeForm,
  CustomInput,
  CustomLabel,
  CustomSelect,
  CustomOption,
  CustomButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizesOptionIdInput: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    fontSizeOptionId: '',
  }

  onChangeBgImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizesOptionIdInput: event.target.value})
  }

  onClickGenerate = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizesOptionIdInput,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSizeOptionId: fontSizesOptionIdInput,
    })
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      fontSizeOptionId,
    } = this.state
    return (
      <MemeContainer bgImageUrl={backgroundImageUrl} data-testid="meme">
        <TextContent activeFontSizeOption={fontSizeOptionId}>
          {topText}
        </TextContent>
        <TextContent activeFontSizeOption={fontSizeOptionId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  renderMemeGeneratorForm = () => {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizesOptionIdInput,
    } = this.state
    return (
      <MemeForm onSubmit={this.onClickGenerate}>
        <CustomLabel htmlFor="backgroundImageUrl">Image Url</CustomLabel>
        <CustomInput
          type="text"
          id="backgroundImageUrl"
          onChange={this.onChangeBgImage}
          value={backgroundImageUrlInput}
          placeholder="Enter the Image URL"
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          onChange={this.onChangeTopText}
          value={topTextInput}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          onChange={this.onChangeBottomText}
          value={bottomTextInput}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="fontSizeOptions">Font Size</CustomLabel>
        <CustomSelect
          id="fontSizeOptions"
          onChange={this.onChangeFontSize}
          value={fontSizesOptionIdInput}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <CustomButton type="submit">Generate</CustomButton>
      </MemeForm>
    )
  }

  render() {
    return (
      <App>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <MemeAndFormContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </MemeAndFormContainer>
        </MemeGeneratorContainer>
      </App>
    )
  }
}

export default MemeGenerator
