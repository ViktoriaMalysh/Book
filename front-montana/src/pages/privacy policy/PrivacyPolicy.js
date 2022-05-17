import Footer from "../../components/footer/Footer";
import { styles } from "../../animation/styles";
import { StyleRoot } from "radium";
import "./privacyPolicy.css";

const privacyPolicy = [
  {
    id: 1,
    title: "Privacy Policy",
    text: "Aenean ullamcorper est est, ac bibendum ipsum tincidunt vehicula. Nulla faucibus vulputate lorem, vitae placerat felis blandit ut. Nam sem quam, euismod sit amet augue et, mollis congue nisi. Vestibulum fringilla lobortis nunc ac tincidunt. Cras nec convallis quam. Maecenas non sem ut enim facilisis rhoncus. Sed odio ex, efficitur ac commodo sed, convallis vitae lectus. Aenean at urna ac tellus ullamcorper pretium. Aliquam erat volutpat. Aliquam sit amet tellus in tortor posuere convallis quis nec tellus. Nulla eu mauris sit amet enim eleifend congue. Quisque aliquam, turpis quis elementum tempus, velit arcu dignissim dui, a vehicula lectus nisi non felis.",
  },
  {
    id: 2,
    title: "Collect Information",
    text: "Donec ac pulvinar diam, ac mollis augue. Etiam interdum fringilla magna, at placerat libero malesuada sed. Proin tincidunt a sapien at facilisis. Cras nec lectus pretium, convallis tellus eu, placerat augue. Curabitur luctus odio efficitur elit volutpat, quis venenatis tellus vestibulum. Nam ultrices massa id tellus commodo, at mollis elit mattis. Etiam eget ultrices lectus, at faucibus mauris. Integer at mauris ex. Vivamus interdum cursus mi quis venenatis. Sed pulvinar efficitur quam quis congue. Ut vel ornare lorem. Vivamus mi mi, vestibulum nec eleifend eu, lobortis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit augue dui, non rutrum enim ultrices vel. Fusce mattis ullamcorper nisl, sit amet venenatis odio tincidunt eget.",
  },
  {
    id: 3,
    title: "Usage of Information",
    text: "Phasellus commodo venenatis erat, et vestibulum mi fringilla in. Proin elit urna, condimentum ut elit id, imperdiet rutrum orci. Praesent vehicula velit at est rutrum lacinia. Nullam accumsan at tortor in ullamcorper. Proin semper sagittis nisl, vitae finibus nisl maximus non. Cras dictum risus quis augue tempor egestas. Proin luctus fermentum nunc, eget pretium dolor tristique id. <br/>Suspendisse hendrerit ex sit amet augue lobortis ullamcorper. Maecenas dignissim facilisis orci, non imperdiet sapien ornare at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br/>Nam ultrices mi mauris, eget tempus massa ornare id. Aenean rhoncus vestibulum diam, ut dapibus dolor vehicula non. Proin rhoncus convallis commodo.    ",
  },
  {
    id: 4,
    title: "Security Of User Data",
    text: "Integer justo neque imperdiet vitae consequat in vehicula quis dolor orbi lorem leo volutpat a tristique :<br/>1. Ut scelerisque hendrerit venenatis<br/> 2. Proin fermentum lacus nec augue blandit placerat  <br/>  3. Ut vestibulum elit justo suscipit sem ultricies <br/>  4. Integer fermentum vitae magna in condimentum <br/>  5. Aenean ultrices neque id pellentesque tincidunt<br/> 6. Donec ut vestibulum sem, in faucibus mauris.    ",
  },
  {
    id: 5,
    title: "Copyright and Security",
    text: "Vestibulum bibendum metus quis purus sagittis ultricies. Vestibulum fringilla urna volutpat eros pharetra consectetur. Integer rutrum eu odio et pulvinar. Sed hendrerit pellentesque faucibus. In venenatis lacus sit amet vehicula efficitur. Suspendisse pulvinar malesuada dui non mollis. Aliquam urna massa, rutrum vel luctus in, facilisis a turpis. Ut aliquet accumsan turpis, eget egestas sem pellentesque nec. Phasellus faucibus congue tempor. Mauris ac massa scelerisque metus pulvinar feugiat in ut leo. Proin congue felis orci. Suspendisse consectetur nisl at faucibus venenatis. Quisque pretium rhoncus dui, porttitor varius mi iaculis nec.",
  },
];

function PrivacyPolicy() {
  return (
    <StyleRoot>
      <div className="div-privacy">
        <div className="div-privacy-header">
          <p className="p-privacy-title" style={styles.fadeInDown2s}>
            Privacy Policy
          </p>
        </div>

        <div className="div-privacy-block">
          {privacyPolicy.map((item) => (
            <div className="div-privacy-block-item" key={item.id}>
              <div className="div-privacy-title">
                <span className="span-color">
                  <i class="fa fa-minus"></i>
                </span>
                <span className="span-privacy-title">{item.title}</span>
              </div>
              <span className="span-privacy-text">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="div-privacy-footer div-8-end">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
}

export default PrivacyPolicy;
