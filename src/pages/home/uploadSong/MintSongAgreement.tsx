import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { FunctionComponent } from "react";

interface MintSongAgreementProps {
  readonly songName: string;
  readonly companyName: string;
  readonly artistName: string;
  readonly stageName: string;
}

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    fontFamily: "Helvetica",
    fontSize: 12,
    paddingVertical: 72,
    paddingHorizontal: 72,
  },
  section: {
    marginBottom: 12,
  },
  paragraph: {
    marginBottom: 12,
  },
  heading: {
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
  bold: {
    fontFamily: "Helvetica-Bold",
  },
});

// Create Document Component
const MintSongAgreement: FunctionComponent<MintSongAgreementProps> = ({
  songName,
  companyName,
  artistName,
  stageName,
}) => (
  <Document>
    <Page size="A4" style={ styles.page }>
      <View style={ styles.section }>
        <Text style={ styles.heading }>
          NEWM Song Token Purchase and Assignment of Streaming Royalties
          Agreement
        </Text>
      </View>

      <View style={ styles.section }>
        <View style={ styles.paragraph }>
          <Text>
            This { songName } Song Token Purchase and Assignment of Streaming
            Royalties Agreement (this “
            <Text style={ styles.bold }>Agreement</Text>
            ”) is a legally binding agreement by and between { companyName } (“
            <Text style={ styles.bold }>Artist Entity</Text>”), f/s/o { artistName }{ " " }
            p/k/a { stageName } (together with Artist Entity, “
            <Text style={ styles.bold }>Artist</Text>”) and any purchaser of the
            Song Token whether it is an initial purchaser or a subsequent
            purchaser (“<Text style={ styles.bold }>you</Text>” or “
            <Text style={ styles.bold }>Purchaser</Text>”). Artist and each
            Purchaser may be referred to throughout this Agreement collectively
            as the “<Text style={ styles.bold }>Parties</Text>” or individually as
            a “<Text style={ styles.bold }>Party</Text>”.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default MintSongAgreement;
